/**
 * Conflict Resolver Component for handling sync conflicts
 */

import Swal from 'sweetalert2';

class ConflictResolver {
    constructor() {
        this.pendingConflicts = [];
    }

    /**
     * 解决单个冲突
     */
    async resolveConflict(conflict) {
        const localProblem = conflict.versions.find(v => v.source === 'local').problem;
        const cloudProblem = conflict.versions.find(v => v.source !== 'local')?.problem;
        
        if (!cloudProblem) {
            // 没有云端版本，使用本地版本
            return localProblem;
        }
        
        const localTime = new Date(localProblem.modificationTime || 0);
        const cloudTime = new Date(cloudProblem.modificationTime || 0);
        
        const result = await Swal.fire({
            title: 'Data Conflict Detected',
            html: this.buildConflictHTML(localProblem, cloudProblem, localTime, cloudTime),
            showCancelButton: true,
            confirmButtonText: 'Use Cloud Version',
            cancelButtonText: 'Use Local Version',
            showDenyButton: true,
            denyButtonText: 'Merge Manually',
            customClass: {
                container: 'conflict-resolver-container',
                popup: 'conflict-resolver-popup'
            }
        });
        
        if (result.isConfirmed) {
            return cloudProblem;
        } else if (result.isDenied) {
            return await this.manualMerge(localProblem, cloudProblem);
        } else {
            return localProblem;
        }
    }

    /**
     * 构建冲突显示HTML
     */
    buildConflictHTML(localProblem, cloudProblem, localTime, cloudTime) {
        const formatDate = (date) => {
            return date.toLocaleString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        };
        
        return `
            <div class="conflict-details">
                <h4>Problem: ${localProblem.name || localProblem.title || 'Unknown'}</h4>
                <div class="conflict-comparison">
                    <div class="conflict-version">
                        <h5>Local Version</h5>
                        <p>Modified: ${formatDate(localTime)}</p>
                        <p>Proficiency: ${localProblem.proficiency || 0}</p>
                        ${localProblem.note ? `<p>Has notes: Yes</p>` : ''}
                        ${localProblem.fsrsState ? `<p>Next Review: ${new Date(localProblem.fsrsState.nextReview).toLocaleDateString()}</p>` : ''}
                    </div>
                    <div class="conflict-version">
                        <h5>Cloud Version</h5>
                        <p>Modified: ${formatDate(cloudTime)}</p>
                        <p>Proficiency: ${cloudProblem.proficiency || 0}</p>
                        ${cloudProblem.note ? `<p>Has notes: Yes</p>` : ''}
                        ${cloudProblem.fsrsState ? `<p>Next Review: ${new Date(cloudProblem.fsrsState.nextReview).toLocaleDateString()}</p>` : ''}
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * 手动合并冲突
     */
    async manualMerge(localProblem, cloudProblem) {
        const result = await Swal.fire({
            title: 'Manual Merge',
            html: this.buildManualMergeHTML(localProblem, cloudProblem),
            showCancelButton: true,
            confirmButtonText: 'Save Merged Version',
            cancelButtonText: 'Cancel',
            preConfirm: () => {
                return this.collectMergeChoices();
            }
        });
        
        if (result.isConfirmed && result.value) {
            return this.applyMergeChoices(localProblem, cloudProblem, result.value);
        }
        
        // 默认返回本地版本
        return localProblem;
    }

    /**
     * 构建手动合并HTML
     */
    buildManualMergeHTML(localProblem, cloudProblem) {
        return `
            <div class="manual-merge-container">
                <h4>Choose which values to keep:</h4>
                <div class="merge-field">
                    <label>Proficiency Level:</label>
                    <select id="merge-proficiency">
                        <option value="local">Local (${localProblem.proficiency || 0})</option>
                        <option value="cloud">Cloud (${cloudProblem.proficiency || 0})</option>
                        <option value="max">Use Higher Value</option>
                    </select>
                </div>
                <div class="merge-field">
                    <label>Notes:</label>
                    <select id="merge-note">
                        <option value="local">Local${localProblem.note ? ' (has content)' : ' (empty)'}</option>
                        <option value="cloud">Cloud${cloudProblem.note ? ' (has content)' : ' (empty)'}</option>
                        <option value="longest">Use Longer Note</option>
                        <option value="combine">Combine Both</option>
                    </select>
                </div>
                <div class="merge-field">
                    <label>FSRS State:</label>
                    <select id="merge-fsrs">
                        <option value="local">Local${localProblem.fsrsState ? ' (active)' : ' (none)'}</option>
                        <option value="cloud">Cloud${cloudProblem.fsrsState ? ' (active)' : ' (none)'}</option>
                        <option value="latest">Use Most Recent</option>
                    </select>
                </div>
                <div class="merge-field">
                    <label>Reviews:</label>
                    <select id="merge-reviews">
                        <option value="local">Local Only</option>
                        <option value="cloud">Cloud Only</option>
                        <option value="combine">Combine All</option>
                    </select>
                </div>
            </div>
        `;
    }

    /**
     * 收集合并选择
     */
    collectMergeChoices() {
        return {
            proficiency: document.getElementById('merge-proficiency').value,
            note: document.getElementById('merge-note').value,
            fsrs: document.getElementById('merge-fsrs').value,
            reviews: document.getElementById('merge-reviews').value
        };
    }

    /**
     * 应用合并选择
     */
    applyMergeChoices(localProblem, cloudProblem, choices) {
        const merged = { ...localProblem };
        
        // 合并 proficiency
        if (choices.proficiency === 'cloud') {
            merged.proficiency = cloudProblem.proficiency;
        } else if (choices.proficiency === 'max') {
            merged.proficiency = Math.max(
                localProblem.proficiency || 0,
                cloudProblem.proficiency || 0
            );
        }
        
        // 合并 note
        if (choices.note === 'cloud') {
            merged.note = cloudProblem.note;
        } else if (choices.note === 'longest') {
            const localNote = localProblem.note || '';
            const cloudNote = cloudProblem.note || '';
            merged.note = localNote.length > cloudNote.length ? localNote : cloudNote;
        } else if (choices.note === 'combine') {
            const localNote = localProblem.note || '';
            const cloudNote = cloudProblem.note || '';
            if (localNote && cloudNote && localNote !== cloudNote) {
                merged.note = `${localNote}\n\n--- Cloud Version ---\n\n${cloudNote}`;
            } else {
                merged.note = localNote || cloudNote;
            }
        }
        
        // 合并 FSRS state
        if (choices.fsrs === 'cloud') {
            merged.fsrsState = cloudProblem.fsrsState;
        } else if (choices.fsrs === 'latest') {
            const localTime = localProblem.fsrsState?.lastReview || 0;
            const cloudTime = cloudProblem.fsrsState?.lastReview || 0;
            merged.fsrsState = localTime > cloudTime ? localProblem.fsrsState : cloudProblem.fsrsState;
        }
        
        // 合并 reviews
        if (choices.reviews === 'cloud') {
            merged.reviews = cloudProblem.reviews;
        } else if (choices.reviews === 'combine') {
            const allReviews = new Map();
            
            // 添加本地reviews
            if (localProblem.reviews && Array.isArray(localProblem.reviews)) {
                localProblem.reviews.forEach(review => {
                    const key = `${review.date}-${review.rating}`;
                    allReviews.set(key, review);
                });
            }
            
            // 添加云端reviews
            if (cloudProblem.reviews && Array.isArray(cloudProblem.reviews)) {
                cloudProblem.reviews.forEach(review => {
                    const key = `${review.date}-${review.rating}`;
                    allReviews.set(key, review);
                });
            }
            
            merged.reviews = Array.from(allReviews.values());
        }
        
        // 更新修改时间
        merged.modificationTime = Date.now();
        
        return merged;
    }

    /**
     * 批量解决冲突
     */
    async resolveMultipleConflicts(conflicts) {
        const resolved = [];
        
        for (const conflict of conflicts) {
            const resolvedProblem = await this.resolveConflict(conflict);
            resolved.push({
                id: conflict.id,
                problem: resolvedProblem
            });
        }
        
        return resolved;
    }

    /**
     * 自动解决冲突（使用默认策略）
     */
    autoResolveConflict(conflict) {
        const versions = conflict.versions;
        
        // 默认策略：使用最新修改的版本
        let latest = versions[0];
        let latestTime = latest.problem.modificationTime || 0;
        
        for (const version of versions) {
            const time = version.problem.modificationTime || 0;
            if (time > latestTime) {
                latest = version;
                latestTime = time;
            }
        }
        
        return latest.problem;
    }
}

// 添加样式
const style = document.createElement('style');
style.textContent = `
    .conflict-resolver-container {
        z-index: 10000;
    }
    
    .conflict-resolver-popup {
        max-width: 600px;
    }
    
    .conflict-details {
        text-align: left;
    }
    
    .conflict-comparison {
        display: flex;
        gap: 20px;
        margin-top: 15px;
    }
    
    .conflict-version {
        flex: 1;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        background: #f9f9f9;
    }
    
    .conflict-version h5 {
        margin-top: 0;
        color: #333;
        font-size: 14px;
        font-weight: bold;
    }
    
    .conflict-version p {
        margin: 5px 0;
        font-size: 12px;
        color: #666;
    }
    
    .manual-merge-container {
        text-align: left;
    }
    
    .merge-field {
        margin: 15px 0;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .merge-field label {
        flex: 0 0 120px;
        font-weight: bold;
        font-size: 13px;
    }
    
    .merge-field select {
        flex: 1;
        padding: 5px;
        border: 1px solid #ddd;
        border-radius: 3px;
        font-size: 13px;
    }
`;
document.head.appendChild(style);

// 导出单例
export const conflictResolver = new ConflictResolver();