# 坚果云 WebDAV 集成方案文档

## 一、整体架构设计

### 系统架构图
```
┌─────────────────────────────────────────────────┐
│                   用户操作层                      │
│  (做题/评分/添加笔记/删除题目等)                    │
└─────────────────┬───────────────────────────────┘
                  ▼
┌─────────────────────────────────────────────────┐
│              数据服务层 (problemService)          │
│  - 统一的数据访问接口                             │
│  - 自动同步协调器                                │
└────────┬────────────────┬────────────────┬──────┘
         ▼                ▼                ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│  本地存储     │ │ Chrome Sync  │ │  坚果云      │
│ localStorage │ │   Storage    │ │   WebDAV     │
└──────────────┘ └──────────────┘ └──────────────┘
```

## 二、数据存储策略

### 2.1 三层存储优先级
```javascript
Priority Level:
1. 本地存储 (localStorage) - 最快，始终可用
2. Chrome Sync Storage - 有限容量(100KB)，跨设备同步
3. 坚果云 WebDAV - 无限容量，需要网络
```

### 2.2 数据结构设计
```javascript
// 坚果云存储的数据格式
{
  version: "2.0",
  lastSync: "2025-09-10T10:00:00Z",
  deviceId: "device-unique-id",
  data: {
    problems: {
      "1": { 
        id: "1",
        name: "Two Sum",
        difficulty: "Easy",
        lastModified: 1234567890,
        version: 1,
        fsrsState: { /* FSRS 数据 */ },
        note: "解题思路...",
        // ... 其他字段
      },
      "2": { /* 题目数据 */ }
    },
    metadata: {
      totalProblems: 1500,
      lastModified: "2025-09-10T10:00:00Z",
      syncVersion: 1
    }
  }
}
```

## 三、同步时序设计

### 3.1 应用启动时序
```
用户打开插件
    │
    ├─→ 加载本地数据（立即显示）
    │
    ├─→ 检查 WebDAV 配置
    │   └─→ 如已配置
    │       ├─→ 后台拉取云端数据
    │       ├─→ 比较版本号
    │       └─→ 智能合并数据
    │
    └─→ 显示界面（使用本地数据，后台同步）
```

### 3.2 数据修改时序
```
用户操作（评分/添加笔记等）
    │
    ├─→ 立即更新本地存储
    │
    ├─→ 更新界面显示
    │
    ├─→ 标记为"待同步"
    │
    └─→ 触发防抖同步（延迟2秒）
        ├─→ Chrome Sync（如启用）
        └─→ WebDAV 同步（如启用）
```

### 3.3 自动同步机制
- **定时同步**：每5分钟自动同步一次
- **操作触发**：批量操作后延迟2秒同步
- **窗口关闭**：beforeunload 事件触发同步
- **手动同步**：用户点击同步按钮

## 四、冲突解决策略

### 4.1 版本控制
每个题目数据包含：
- `lastModified`: 最后修改时间戳
- `version`: 版本号
- `deviceId`: 设备标识

### 4.2 合并策略
**冲突解决优先级：**
1. 最新修改时间优先（lastModified）
2. 版本号高的优先（version）
3. 用户选择（弹窗提示）

**特殊字段合并规则：**
- 复习记录：合并所有记录
- 笔记：保留最长的
- 评分：取最新的
- FSRS状态：使用最新的

## 五、具体实现方案

### 5.1 核心模块

#### SyncManager（同步管理器）
```javascript
class SyncManager {
  constructor() {
    this.syncTimer = null;
    this.syncQueue = new Set();
    this.SYNC_DELAY = 2000; // 2秒防抖
    this.isSyncing = false;
  }
  
  // 防抖同步
  debouncedSync() {
    clearTimeout(this.syncTimer);
    this.syncTimer = setTimeout(() => {
      this.performSync();
    }, this.SYNC_DELAY);
  }
  
  // 立即同步
  async immediateSync() {
    clearTimeout(this.syncTimer);
    await this.performSync();
  }
  
  // 执行同步
  async performSync() {
    if (this.isSyncing) return;
    this.isSyncing = true;
    
    try {
      // 1. 获取本地数据
      const localData = await this.getLocalData();
      
      // 2. 获取云端数据
      const cloudData = await this.getCloudData();
      
      // 3. 合并数据
      const mergedData = await this.mergeData(localData, cloudData);
      
      // 4. 保存合并后的数据
      await this.saveData(mergedData);
      
      // 5. 清空同步队列
      this.syncQueue.clear();
    } catch (error) {
      console.error('Sync failed:', error);
      this.handleSyncError(error);
    } finally {
      this.isSyncing = false;
    }
  }
}
```

#### 数据合并算法
```javascript
function mergeProblems(local, cloud) {
  const merged = new Map();
  const conflicts = [];
  
  // 处理云端数据
  Object.entries(cloud).forEach(([id, cloudProblem]) => {
    const localProblem = local[id];
    
    if (!localProblem) {
      // 只在云端存在
      merged.set(id, cloudProblem);
    } else {
      // 两边都存在，比较版本
      const mergedProblem = mergeSingleProblem(localProblem, cloudProblem);
      if (mergedProblem.hasConflict) {
        conflicts.push({id, local: localProblem, cloud: cloudProblem});
      } else {
        merged.set(id, mergedProblem.data);
      }
    }
  });
  
  // 处理只在本地存在的数据
  Object.entries(local).forEach(([id, localProblem]) => {
    if (!cloud[id]) {
      merged.set(id, localProblem);
    }
  });
  
  return {
    problems: Object.fromEntries(merged),
    conflicts
  };
}
```

### 5.2 同步触发点

#### 评分操作
```javascript
async function rateProblem(problemId, rating) {
  // 1. 更新本地数据
  await updateLocalProblem(problemId, { 
    rating, 
    lastModified: Date.now(),
    version: (problem.version || 0) + 1
  });
  
  // 2. 触发同步
  syncManager.debouncedSync();
}
```

#### 批量操作
```javascript
async function batchUpdateProblems(updates) {
  // 1. 批量更新本地
  for (const update of updates) {
    await updateLocalProblem(update.id, update.data);
  }
  
  // 2. 立即同步（批量操作立即同步）
  await syncManager.immediateSync();
}
```

#### 窗口关闭
```javascript
window.addEventListener('beforeunload', async (e) => {
  if (syncManager.hasPendingChanges()) {
    e.preventDefault();
    await syncManager.immediateSync();
  }
});
```

### 5.3 性能优化

#### 增量同步
```javascript
// 只同步变化的数据
async function incrementalSync(lastSyncTime) {
  const changes = await getChangesSince(lastSyncTime);
  
  if (changes.length === 0) return;
  
  const syncData = {
    changes: changes,
    lastSyncTime: new Date().toISOString(),
    deviceId: getDeviceId()
  };
  
  await webdavService.uploadData('incremental.json', syncData);
}
```

#### 缓存策略
```javascript
class DataCache {
  constructor() {
    this.memoryCache = new Map();
    this.CACHE_TTL = 5 * 60 * 1000; // 5分钟
  }
  
  async getData(key) {
    // 1. 检查内存缓存
    if (this.memoryCache.has(key)) {
      const cached = this.memoryCache.get(key);
      if (Date.now() - cached.time < this.CACHE_TTL) {
        return cached.data;
      }
    }
    
    // 2. 从存储加载
    const data = await this.loadFromStorage(key);
    
    // 3. 更新缓存
    this.memoryCache.set(key, {
      data: data,
      time: Date.now()
    });
    
    return data;
  }
}
```

## 六、错误处理和降级

### 6.1 重试机制
```javascript
async function retryWithBackoff(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      
      // 指数退避
      const delay = Math.pow(2, i) * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}
```

### 6.2 降级策略
```javascript
async function syncWithFallback() {
  try {
    // 优先使用 WebDAV
    if (webdavService.isConfigured) {
      await webdavSync();
      return;
    }
  } catch (error) {
    console.warn('WebDAV sync failed:', error);
  }
  
  try {
    // 降级到 Chrome Sync
    if (store.isCloudSyncEnabled) {
      await chromeSyncStorage();
      return;
    }
  } catch (error) {
    console.warn('Chrome sync failed:', error);
  }
  
  // 最终降级到本地存储
  console.log('Using local storage only');
}
```

## 七、用户界面交互

### 7.1 同步状态指示器
```html
<!-- 添加到 popup.html -->
<div id="syncIndicator" class="sync-indicator">
  <i class="fas fa-sync" id="syncIcon"></i>
  <span id="syncStatus">Synced</span>
</div>
```

```css
.sync-indicator {
  position: fixed;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.sync-indicator.syncing #syncIcon {
  animation: spin 1s linear infinite;
}

.sync-indicator.error {
  color: #ff4444;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

### 7.2 冲突解决弹窗
```javascript
async function resolveConflict(conflict) {
  const result = await Swal.fire({
    title: 'Data Conflict Detected',
    html: `
      <div>Problem: ${conflict.local.name}</div>
      <div>Local modified: ${new Date(conflict.local.lastModified).toLocaleString()}</div>
      <div>Cloud modified: ${new Date(conflict.cloud.lastModified).toLocaleString()}</div>
    `,
    showCancelButton: true,
    confirmButtonText: 'Use Cloud Version',
    cancelButtonText: 'Use Local Version',
    showDenyButton: true,
    denyButtonText: 'Merge Manually'
  });
  
  if (result.isConfirmed) {
    return conflict.cloud;
  } else if (result.isDenied) {
    return await manualMerge(conflict);
  } else {
    return conflict.local;
  }
}
```

## 八、实施计划

### 第一阶段：基础集成（已完成）
- ✅ WebDAV 连接和认证
- ✅ 手动备份/恢复功能
- ✅ 配置界面

### 第二阶段：自动同步（进行中）
- [ ] 实现 SyncManager
- [ ] 防抖同步机制
- [ ] 后台同步任务

### 第三阶段：冲突处理
- [ ] 版本控制系统
- [ ] 智能合并算法
- [ ] 用户冲突解决界面

### 第四阶段：性能优化
- [ ] 增量同步
- [ ] 数据缓存层
- [ ] 压缩传输

### 第五阶段：用户体验
- [ ] 同步状态指示器
- [ ] 进度条显示
- [ ] 错误提示优化

## 九、测试计划

### 9.1 功能测试
- 基本同步功能
- 冲突解决
- 错误恢复
- 性能测试

### 9.2 场景测试
- 多设备同步
- 离线使用
- 网络中断恢复
- 大数据量同步

## 十、注意事项

1. **数据安全**：所有密码需要加密存储
2. **隐私保护**：用户数据仅存储在用户自己的坚果云账户
3. **性能优化**：避免频繁同步影响用户体验
4. **错误处理**：确保同步失败不影响本地使用
5. **向后兼容**：保证老版本数据能正确迁移