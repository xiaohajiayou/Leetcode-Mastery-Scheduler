import { getLocalStorageData, setLocalStorageData } from "../delegate/localStorageDelegate";
import { getAllProblems } from "../service/problemService";
import { renderScheduledTableContent } from "../view/view";
import { store } from "../store";

// 获取所有笔记
const getAllNotes = async () => {
    try {
        const notes = await getLocalStorageData("notes");
        return notes || {};
    } catch (e) {
        console.error("获取笔记数据失败", e);
        return {}; // 返回空对象而不是抛出错误
    }
};

// 同步笔记到存储
const syncNotes = async (notes) => {
    if (!notes) {
        notes = await getAllNotes();
    }
    await setLocalStorageData("notes", notes);
    return notes;
};

// 注册笔记相关事件处理
export const setNoteHandlers = () => {
    console.log("注册笔记处理程序");
    
    // 使用事件委托来处理笔记按钮点击
    document.removeEventListener('click', handleNoteButtonClick); // 先移除之前的监听器，避免重复
    document.addEventListener('click', handleNoteButtonClick);
    
    // 注册保存笔记按钮事件
    const saveNoteBtn = document.getElementById('saveNoteBtn');
    if (saveNoteBtn) {
        console.log("找到保存按钮");
        saveNoteBtn.addEventListener('click', saveNote);
    } else {
        console.error("找不到保存按钮");
    }
    
    // 注册取消按钮事件
    const cancelBtns = document.querySelectorAll('[data-bs-dismiss="modal"]');
    if (cancelBtns.length > 0) {
        console.log("找到取消按钮");
        cancelBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // 关闭模态框
                const noteModal = document.getElementById('noteModal');
                if (noteModal) {
                    noteModal.style.display = 'none';
                    noteModal.classList.remove('show');
                }
            });
        });
    } else {
        console.error("找不到取消按钮");
    }
    
    // 注册导出笔记按钮事件
    const exportNotesBtn = document.getElementById('exportNotesBtn');
    if (exportNotesBtn) {
        console.log("找到导出按钮");
        exportNotesBtn.addEventListener('click', exportAllNotes);
    } else {
        console.error("找不到导出按钮");
    }
    
    // 初始化工具提示
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// 单独定义处理函数，便于移除
const handleNoteButtonClick = (e) => {
    const noteButton = e.target.closest('.note-btn-mark');
    if (noteButton) {
        console.log("点击了笔记按钮", noteButton);
        console.log("按钮元素:", noteButton);
        console.log("data-id属性:", noteButton.getAttribute('data-id'));
        
        const problemIndex = noteButton.getAttribute('data-id');
        if (problemIndex) {
            openNoteModal(problemIndex);
        } else {
            console.error("笔记按钮没有 data-id 属性");
        }
    }
};

// 打开笔记模态框
const openNoteModal = async (problemIndex) => {
    try {
        console.log("打开笔记模态框，问题索引:", problemIndex);
        
        // 使用 getAllProblems 获取问题数据
        const problems = await getAllProblems();
        const problem = problems[problemIndex];
        
        // 如果没有找到问题数据
        if (!problem) {
            console.error("找不到问题数据:", problemIndex);
            return;
        }
        
        // 获取笔记数据
        const notes = await getAllNotes();
        const noteData = notes[problemIndex];
        
        console.log("问题数据:", problem);
        
        // 使用自定义方式打开模态框
        const noteModal = document.getElementById('noteModal');
        if (!noteModal) {
            console.error("找不到模态框元素");
            return;
        }
        
        // 显示模态框
        noteModal.style.display = 'block';
        noteModal.classList.add('show');
        
        // 设置问题索引到隐藏字段
        const problemIndexInput = document.getElementById('problemIndex');
        if (problemIndexInput) {
            problemIndexInput.value = problemIndex;
        } else {
            console.error("找不到问题索引输入框");
        }
        
        // 设置问题名称 - 使用 innerHTML 直接设置
        const problemNameContainer = document.querySelector('.modal-body .mb-3:first-of-type');
        if (problemNameContainer) {
            // 如果有自定义名称，优先使用自定义名称
            const customName = noteData && typeof noteData === 'object' ? noteData.customName : undefined;
            const problemName = customName || problem.name || "未知问题";
            
            problemNameContainer.innerHTML = `
                <label for="noteProblemName" class="form-label">问题名称 (Problem Name)</label>
                <input type="text" class="form-control" id="noteProblemName" value="${problemName}" placeholder="${problem.name || '未知问题'}" style="color: #000 !important; background-color: #fff !important;">
            `;
            console.log("重新创建了问题名称输入框，值为:", problemName);
        } else {
            console.error("找不到问题名称容器");
        }
        
        // 设置笔记内容
        const noteContentTextarea = document.getElementById('noteContent');
        if (noteContentTextarea) {
            noteContentTextarea.value = noteData ? (typeof noteData === 'object' ? noteData.content : noteData) : '';
        } else {
            console.error("找不到笔记内容文本框");
        }
        
        // 设置焦点到文本区域
        setTimeout(() => {
            if (document.getElementById('noteContent')) {
                document.getElementById('noteContent').focus();
            }
        }, 100);
    } catch (e) {
        console.error("打开笔记模态框失败", e);
        alert("打开笔记失败，请查看控制台获取详细错误信息");
    }
}

// 保存笔记
const saveNote = async () => {
    try {
        const problemIndex = document.getElementById('problemIndex').value;
        const problemNameInput = document.getElementById('noteProblemName');
        const noteContent = document.getElementById('noteContent').value;
        
        // 获取用户输入的问题名称，如果输入框为空则使用占位符
        let problemName = "";
        if (problemNameInput) {
            problemName = problemNameInput.value.trim() || problemNameInput.getAttribute('placeholder') || "";
        }
        
        console.log("保存笔记，问题索引:", problemIndex);
        console.log("保存笔记，问题名称:", problemName);
        
        const notes = await getAllNotes();
        
        // 使用 getAllProblems 获取问题数据
        const problems = await getAllProblems();
        const problem = problems[problemIndex];
        
        if (!problem) {
            console.error("找不到问题数据:", problemIndex);
            return;
        }
        
        console.log("原问题名称:", problem.name);
        
        // 如果笔记为空，则删除该条目
        if (noteContent.trim() === '') {
            delete notes[problemIndex];
        } else {
            // 保存笔记内容和用户输入的问题名称
            notes[problemIndex] = {
                content: noteContent,
                customName: problemName !== problem.name ? problemName : undefined
            };
        }
        
        // 保存到本地存储
        await syncNotes(notes);
        
        // 清除焦点
        document.activeElement?.blur();
        
        // 关闭模态框
        const noteModal = document.getElementById('noteModal');
        noteModal.style.display = 'none';
        noteModal.classList.remove('show');
        
        // 获取最新的问题数据
        const allProblems = await getAllProblems();
        
        // 先销毁所有现有的工具提示
        const existingTooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        existingTooltips.forEach(el => {
            const tooltip = bootstrap.Tooltip.getInstance(el);
            if (tooltip) {
                tooltip.dispose();
            }
        });
        
        // 刷新表格以更新笔记图标和问题名称
        await renderScheduledTableContent(store.reviewScheduledProblems, store.scheduledPage);

        // 重新初始化工具提示
        setTimeout(() => {
            // 确保先销毁所有可能存在的工具提示实例
            const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
            tooltipTriggerList.forEach(el => {
                // 创建新的工具提示实例
                new bootstrap.Tooltip(el, {
                    trigger: 'hover',  // 只在悬停时显示
                    container: 'body', // 将工具提示附加到 body
                    boundary: 'window' // 确保工具提示不会超出窗口边界
                });
            });
            
            // 重新注册事件监听器
            setNoteHandlers();
        }, 200); // 增加延迟时间确保 DOM 完全更新
        
        console.log("笔记已保存");
    } catch (e) {
        console.error("保存笔记失败", e);
        alert("保存笔记失败，请查看控制台获取详细错误信息");
    }
}

// 导出所有笔记
const exportAllNotes = async () => {
    try {
        // 使用 getAllProblems 获取问题数据
        const problems = await getAllProblems();
        const notes = await getAllNotes();
        let notesContent = "# LeetCode Mastery Scheduler notes\n\n";
        notesContent += "开源仓库链接/repo url: https://github.com/xiaohajiayou/Leetcode-Mastery-Scheduler" + "\n\n";

        // 筛选有笔记的问题
        const problemIndicesWithNotes = Object.keys(notes).filter(index => 
            problems[index] && !problems[index].isDeleted && 
            (typeof notes[index] === 'string' ? notes[index].trim().length > 0 : 
             (notes[index].content && notes[index].content.trim().length > 0))
        );
        
        if (problemIndicesWithNotes.length === 0) {
            alert("没有找到任何笔记！");
            return;
        }
        
        // 按问题名称排序
        problemIndicesWithNotes.sort((a, b) => 
            (problems[a].name || "").localeCompare(problems[b].name || "")
        );
        
        // 生成markdown格式的笔记内容
        problemIndicesWithNotes.forEach(index => {
            const problem = problems[index];
            const noteData = notes[index];
            const noteContent = typeof noteData === 'string' ? noteData : noteData.content;
            const problemName = (typeof noteData === 'object' && noteData.customName) || problem.name || "未命名问题";
            
            notesContent += `## ${problemName}\n\n`;
            notesContent += `- 难度: ${problem.level || '未知'}\n`;
            notesContent += `- 链接: ${problem.url || '#'}\n\n`;
            notesContent += `### 笔记\n\n${noteContent}\n\n---\n\n`;
        });
        
        // 创建下载链接
        const blob = new Blob([notesContent], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `leetcode_notes_${new Date().toISOString().slice(0, 10)}.md`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        console.log("笔记已导出");
    } catch (e) {
        console.error("导出笔记失败", e);
        alert("导出笔记失败，请查看控制台获取详细错误信息");
    }
} 