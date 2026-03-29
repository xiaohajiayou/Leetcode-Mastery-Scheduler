import { store } from "../store";
import { isInCnMode } from "../service/modeService";
import { getAllProblems, syncProblems } from "../service/problemService";
import { CN_LABLE, GL_LABLE, PAGE_SIZE, months } from "../util/constants";
import { completedTableDOM, input0DOM, input1DOM, input2DOM, inputLabel0DOM, inputLabel1DOM, inputLabel2DOM, needReviewTableDOM, nextButton0DOM, nextButton1DOM, nextButton2DOM, noReviewTableDOM, prevButton0DOM, prevButton1DOM, prevButton2DOM, siteLabelDOM, switchButtonDOM, undoButtonDOMs } from "../util/doms";
import { getCurrentRetrievability,calculatePageNum, getLevelColor, getDelayedHours, getNextReviewTime, isCompleted, needReview, scheduledReview } from "../util/utils";
import { registerAllHandlers } from "../handler/handlerRegister";
import { hasOperationHistory } from "../service/operationHistoryService";
import { loadConfigs } from "../service/configService";
import { getLocalStorageData, setLocalStorageData } from "../../popup/delegate/localStorageDelegate";
import { syncFSRSHistory } from "../service/fsrsService";

const getProblemSearchInputDOM = () => document.getElementById('problemSearchInput');
const getProblemSearchSummaryDOM = () => document.getElementById('problemSearchSummary');

const normalizeSearchText = (value = '') => value.toLowerCase().replace(/\s+/g, '');

const fuzzyMatchProblem = (problem, query) => {
    if (!query) {
        return { matched: true, score: 0 };
    }

    const normalizedQuery = normalizeSearchText(query);
    const searchFields = [
        problem.name,
        problem.index,
        problem.level,
        problem.url
    ].filter(Boolean).map(normalizeSearchText);

    let bestScore = -1;

    for (const field of searchFields) {
        if (!field) continue;

        const includesAt = field.indexOf(normalizedQuery);
        if (includesAt >= 0) {
            const score = 200 - includesAt - Math.max(0, field.length - normalizedQuery.length);
            bestScore = Math.max(bestScore, score);
            continue;
        }

        let queryPtr = 0;
        let gapPenalty = 0;
        for (let i = 0; i < field.length && queryPtr < normalizedQuery.length; i++) {
            if (field[i] === normalizedQuery[queryPtr]) {
                queryPtr += 1;
            } else if (queryPtr > 0) {
                gapPenalty += 1;
            }
        }

        if (queryPtr === normalizedQuery.length) {
            bestScore = Math.max(bestScore, 100 - gapPenalty);
        }
    }

    return {
        matched: bestScore >= 0,
        score: bestScore
    };
};

const applyProblemHistoryFilters = (problems) => {
    const query = (store.problemHistoryQuery || '').trim();
    const indexedProblems = problems.map((problem, index) => {
        const match = fuzzyMatchProblem(problem, query);
        return {
            problem,
            index,
            match
        };
    }).filter(({ match }) => match.matched);

    if (query) {
        indexedProblems.sort((a, b) => {
            if (b.match.score !== a.match.score) {
                return b.match.score - a.match.score;
            }
            return a.index - b.index;
        });
    }

    return indexedProblems.map(item => item.problem);
};

const updateProblemSearchSummary = (filteredCount, totalCount) => {
    const summaryDOM = getProblemSearchSummaryDOM();
    if (!summaryDOM) return;

    if (totalCount === 0) {
        summaryDOM.textContent = 'No problems yet';
        return;
    }

    if (filteredCount === totalCount) {
        summaryDOM.textContent = `${totalCount} problems`;
        return;
    }

    summaryDOM.textContent = `${filteredCount} / ${totalCount} problems`;
};

const initializeProblemBrowserControls = () => {
    const searchInputDOM = getProblemSearchInputDOM();
    if (searchInputDOM && !searchInputDOM.dataset.bound) {
        searchInputDOM.dataset.bound = 'true';
        searchInputDOM.addEventListener('input', async (event) => {
            store.problemHistoryQuery = event.target.value;
            await renderScheduledTableContent(store.problemHistoryProblems || [], 1);
        });
    }
};

/*
    Tag for problem records
*/
const getProblemUrlCell = (problem, width, options = {}) => {
    const levelColor = getLevelColor(problem.level);
    const nameFontSize = options.nameFontSize || '0.95em';
    return `<td style="width: ${width || 45}%;  min-width: 60px; max-width: 0; overflow: hidden;">\
        <a target="_blank" 
           href=${problem.url}
           data-bs-toggle="tooltip" 
           data-bs-placement="top" 
           title="${problem.name} (${problem.level})"
           style="text-decoration: none; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">\
            <small style="color: ${levelColor}; font-size: ${nameFontSize};">${problem.name}</small>\
        </a>\
    </td>`;
};

// const getProblemLevelCell = (problem, width) => `<td style="width: ${width | 12}%;"><small>${decorateProblemLevel(problem.level)}</small></td>`;

// 新增：生成可检索性单元格的函数
const getRetrievabilityCell = (problem) => {
    const retrievability = getCurrentRetrievability(problem);
    const probability = (retrievability * 100).toFixed(1); // 保留一位小数
    const exactValue = retrievability.toFixed(5);  // 保留五位小数
    
    // 根据概率设置不同的样式
    let style;
    if (retrievability >= 0.8) {
        style = 'text-success';  // 绿色
    } else if (retrievability >= 0.5) {
        style = 'text-warning';  // 橙色
    } else {
        style = 'text-danger';   // 红色
    }

    return `\
    <td style="width: 15%; vertical-align: middle; text-align: center;">\
        <div class="memory-indicator d-flex justify-content-center align-items-center" 
             data-bs-toggle="tooltip" 
             data-bs-placement="top" 
             title="Recall Probability: ${exactValue}">\
            <small class="${style}">${probability}%</small>\
        </div>\
    </td>\
    `;
}

const getCheckButtonTag = (problem) => `<small class="fa-regular fa-square-check fa-2xs mt-2 mb-0 check-btn-mark"\ 
                                            data-bs-toggle="tooltip" data-bs-title="✅ Mark as mastered" data-bs-placement="left"\
                                            style="color: #d2691e;" data-id=${problem.index}> </small>`;

const getDeleteButtonTag = (problem) => `<small class="fa-regular fa-square-minus fa-2xs mt-2 mb-0 delete-btn-mark"\ 
                                            data-bs-toggle="tooltip" data-bs-title="⛔ Delete this record" data-bs-placement="left"\
                                            style="color: red;" data-id=${problem.index}> </small>`;

const getResetButtonTag = (problem) => `<small class="fa-solid fa-arrows-rotate fa-2xs mt-2 mb-0 reset-btn-mark" \
                                            data-bs-toggle="tooltip" data-bs-title="🔄 Reset progress" data-bs-placement="left"\
                                            style="color: #d2691e;" data-id=${problem.index}> </small>`;

const getNoteButtonTag = (problem, notes) => {
    const hasNote = notes[problem.index] && notes[problem.index].content.trim().length > 0;
    return `<small class="fa-regular ${hasNote ? 'fa-file-lines' : 'fa-file'} fa-2xs mt-2 mb-0 note-btn-mark"\ 
                data-bs-toggle="tooltip" data-bs-title="${hasNote ? '📝 查看/编辑笔记 (View/Edit Note)' : '📝 添加笔记 (Add Note)'}" data-bs-placement="left"\
                style="color: ${hasNote ? '#4682b4' : '#808080'}; margin-left: 8px; cursor: pointer;" data-id="${problem.index}"> </small>`;
}

const createReviewProblemRecord = (problem) => {
    const htmlTag =
        `\
    <tr>\
        ${getProblemUrlCell(problem)}\
        <td><small>${getDelayedHours(problem)} hour(s)</small></td>\
        ${getRetrievabilityCell(problem)}\
        <td style="text-align: center; vertical-align:middle">\
            ${getCheckButtonTag(problem)}\
            ${getResetButtonTag(problem)}\
            ${getDeleteButtonTag(problem)}\
        </td>\
    </tr>\
    `;
    return htmlTag;
    ;
}

const createScheduleProblemRecord = async (problem, notes) => {
    const nextReviewDate = getNextReviewTime(problem);
    
    const htmlTag =
        `\
    <tr style="vertical-align:middle">\
        ${getProblemUrlCell(problem, 49, { nameFontSize: '0.88em' })}\
        <td style="text-align: center; width: 18%; padding: 0;"><small data-bs-toggle="tooltip" data-bs-placement="top" title="${formatFullDate(nextReviewDate)}">${formatDateTime(nextReviewDate)}</small></td>\
        ${getRetrievabilityCell(problem)}\
        <td style="width: 18%; text-align: center; vertical-align:middle; white-space: nowrap;">\
            ${getDeleteButtonTag(problem)}\
            ${getNoteButtonTag(problem, notes)}\
        </td>\
    </tr>\
    `;
    return htmlTag;
}

// 添加一个日期格式化辅助函数
const formatDateTime = (date) => {
    const pad = (n) => n < 10 ? `0${n}` : n;
    return `${months[date.getMonth()]} ${date.getDate()}`;
}
// 添加一个完整日期格式化函数
const formatFullDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;  // getMonth() 返回 0-11
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    // 补零函数
    const pad = (n) => n < 10 ? `0${n}` : n;
    
    return `${year}/${pad(month)}/${pad(day)} ${pad(hours)}:${pad(minutes)}`;
}

const createCompletedProblemRecord = (problem) => {
    const htmlTag =
        `\
    <tr>\
        ${getProblemUrlCell(problem, 35)}\
        ${getProblemLevelCell(problem)}\
        <td style="text-align: center; vertical-align:middle">\
            ${getResetButtonTag(problem)}\
            ${getDeleteButtonTag(problem)}\
        </td>\
    </tr>\
    `;
    return htmlTag;
    ;
}

// 添加笔记模态框HTML
const renderNoteModal = () => {
    // 检查是否已经存在模态框
    if (document.getElementById('noteModal')) {
        console.log("笔记模态框已存在，不再创建");
        return; // 如果已存在，不再创建
    }
    
    console.log("开始创建笔记模态框");
    
    const modalHTML = `
    <div class="modal" id="noteModal" tabindex="-1" role="dialog" style="display: none;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="noteModalLabel">Problem Note</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <input type="hidden" id="problemIndex">
                    <div class="mb-3">
                        <label for="problemName" class="form-label">问题名称 (Problem Name)</label>
                        <input type="text" class="form-control" id="problemName" placeholder="">
                    </div>
                    <div class="mb-3">
                        <label for="noteContent" class="form-label">笔记内容 (Note Content)</label>
                        <textarea class="form-control" id="noteContent" rows="6" placeholder="在这里输入笔记内容... (Enter your notes here...)"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="saveNoteBtn">Save</button>
                </div>
            </div>
        </div>
    </div>`;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // 添加模态框样式
    const style = document.createElement('style');
    style.textContent = `
        .modal.show {
            display: block !important;
            background-color: rgba(0, 0, 0, 0.5);
        }
        #problemName, #noteContent {
            color: #000 !important;
            background-color: #fff !important;
        }
        #problemName::placeholder {
            color: #555 !important;
            opacity: 1 !important;
        }
    `;
    document.head.appendChild(style);
    
    console.log("笔记模态框已创建，检查元素:");
    console.log("问题名称输入框:", document.getElementById('problemName'));
    console.log("笔记内容文本框:", document.getElementById('noteContent'));
}



// 添加一个全局函数用于初始化所有 tooltip
const initializeTooltips = () => {
    // 先移除所有现有的 tooltip 元素
    document.querySelectorAll('.tooltip').forEach(el => {
        el.remove();
    });
    
    // 销毁所有现有的 tooltip 实例
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
        const tooltip = bootstrap.Tooltip.getInstance(el);
        if (tooltip) {
            tooltip.dispose();
        }
    });
    
    // 初始化新的 tooltip
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
        new bootstrap.Tooltip(el, {
            trigger: 'hover focus', // 只在悬停或获取焦点时显示
            container: 'body',      // 将 tooltip 附加到 body
            boundary: 'window'      // 确保 tooltip 不超出窗口
        });
    });
};

export const renderReviewTableContent = (problems, page) => {
    /* validation */
    console.log(store.toReviewMaxPage);
    if (page > store.toReviewMaxPage || page < 1) {
        input0DOM.classList.add("is-invalid");
        return;
    }
    input0DOM.classList.remove("is-invalid");

    store.toReviewPage = page;

    /* update pagination elements */
    input0DOM.value = page;
    inputLabel0DOM.innerText = `/${store.toReviewMaxPage}`;

    if (page === 1) prevButton0DOM.setAttribute("disabled", "disabled");
    if (page !== 1) prevButton0DOM.removeAttribute("disabled");
    if (page === store.toReviewMaxPage) nextButton0DOM.setAttribute("disabled", "disabled");
    if (page !== store.toReviewMaxPage) nextButton0DOM.removeAttribute("disabled");

    let content_html =
        '\
    <thead>\
        <tr style="font-size: smaller">\
            <th class="text-center">Problem</th>\
            <th class="text-center">Delay</th>\
            <th class="text-center">Recall</th>\
            <th class="text-center">Operation</th>\
        </tr>\
    </thead>\
    <tbody>\
    ';

    problems = problems.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    let keys = Object.keys(problems);
    for (const i of keys) {
        content_html += createReviewProblemRecord(problems[i]) + '\n';
    }
    content_html += `</tbody>`

    needReviewTableDOM.innerHTML = content_html;
}

export const renderScheduledTableContent = async (problems, page) => {
    input1DOM.classList.remove("is-invalid");
    store.scheduledPage = 1;
    input1DOM.value = 1;
    inputLabel1DOM.innerText = `/1`;
    prevButton1DOM.setAttribute("disabled", "disabled");
    nextButton1DOM.setAttribute("disabled", "disabled");

    const filteredProblems = applyProblemHistoryFilters(problems);
    updateProblemSearchSummary(filteredProblems.length, problems.length);

    let content_html =
        '\
    <thead>\
        <tr style="font-size: 11px">\
            <th class="text-center" style="width: 49%">Problem</th>\
            <th class="text-center" style="width: 18%">Review</th>\
            <th class="text-center" style="width: 15%">Recall</th>\
            <th class="text-center" style="width: 18%">Action</th>\
        </tr>\
    </thead>\
    <tbody>\
    ';

    let notes = {};
    try {
        notes = await getLocalStorageData("notes") || {};
    } catch (e) {
        console.error("获取笔记数据失败", e);
    }

    if (filteredProblems.length === 0) {
        content_html += `<tr><td colspan="4"><div class="problem-history-empty">No matching problems found.</div></td></tr>`;
    }

    for (const problem of filteredProblems) {
        content_html += await createScheduleProblemRecord(problem, notes);
    }

    content_html += `</tbody>`

    noReviewTableDOM.innerHTML = content_html;
    
    // 初始化 tooltip
    setTimeout(() => {
        initializeTooltips();
    }, 100);
}

export const renderCompletedTableContent = (problems, page) => {

    /* validation */
    if (page > store.completedMaxPage || page < 1) {
        input2DOM.classList.add("is-invalid");
        return;
    }
    input2DOM.classList.remove("is-invalid");

    store.completedPage = page;

    /* update pagination elements */
    input2DOM.value = page;
    inputLabel2DOM.innerText = `/${store.completedMaxPage}`;

    if (page === 1) prevButton2DOM.setAttribute("disabled", "disabled");
    if (page !== 1) prevButton2DOM.removeAttribute("disabled");
    if (page === store.completedMaxPage) nextButton2DOM.setAttribute("disabled", "disabled");
    if (page !== store.completedMaxPage) nextButton2DOM.removeAttribute("disabled");

    let content_html =
        '\
    <thead>\
        <tr style="font-size: smaller">\
            <th>Problem</th>\
            <th>Level</th>\
            <th>Operation</th>\
        </tr>\
    </thead>\
    <tbody>\
    ';

    problems = problems.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    let keys = Object.keys(problems);
    for (const i of keys) {
        content_html += createCompletedProblemRecord(problems[i]) + '\n';
    }

    content_html += `</tbody>`
    completedTableDOM.innerHTML = content_html;
    
    // 初始化 tooltip
    setTimeout(() => {
        initializeTooltips();
    }, 100);
}

export const renderSiteMode = async () => {
    let cnMode = await isInCnMode();
    if (cnMode) {
        switchButtonDOM.setAttribute("checked", "checked");
        siteLabelDOM.innerHTML = CN_LABLE;
    } else {
        switchButtonDOM.removeAttribute("checked");
        siteLabelDOM.innerHTML = GL_LABLE;
    }
}

export const renderUndoButton = async () => {
    if (await hasOperationHistory()) {
        Array.prototype.forEach.call(undoButtonDOMs, btn => btn.removeAttribute("disabled"));
    } else {
        Array.prototype.forEach.call(undoButtonDOMs, btn => btn.setAttribute("disabled", "disabled"));
    }
} 

export const renderAll = async () => {
    await loadConfigs();
    await renderSiteMode();
    // 不要在每次 renderAll 时都同步，这会干扰防抖同步
    // await syncProblems();
    // await syncFSRSHistory();

    // 创建笔记模态框

    


    const problems = Object.values(await getAllProblems()).filter(p => p.isDeleted !== true);
    console.log('Filtering and sorting problems...');
    
    // 过滤不同类型的问题
    store.needReviewProblems = problems.filter(needReview);
    console.log('Need Review Problems:', {
        count: store.needReviewProblems.length,
        problems: store.needReviewProblems
    });

    store.reviewScheduledProblems = problems.filter(scheduledReview);
    console.log('Scheduled Review Problems:', {
        count: store.reviewScheduledProblems.length,
        problems: store.reviewScheduledProblems
    });

    store.completedProblems = problems.filter(isCompleted);
    console.log('Completed Problems:', {
        count: store.completedProblems.length,
        problems: store.completedProblems
    });

    // 计算页数
    store.toReviewMaxPage = calculatePageNum(store.needReviewProblems);
    store.scheduledMaxPage = calculatePageNum(store.reviewScheduledProblems);
    store.completedMaxPage = calculatePageNum(store.completedProblems);
    console.log('Page Counts:', {
        toReview: store.toReviewMaxPage,
        scheduled: store.scheduledMaxPage,
        completed: store.completedMaxPage
    });

    // 排序
    console.log('Sorting by:', store.problemSortBy);
    store.needReviewProblems.sort(store.problemSortBy);
    store.reviewScheduledProblems.sort(store.problemSortBy);
    store.completedProblems.sort(store.problemSortBy);
    store.problemHistoryProblems = [...problems].sort(store.problemSortBy);
    if (store.problemHistoryQuery === undefined) store.problemHistoryQuery = '';
    
    console.log('Filtering and sorting completed.');

    initializeProblemBrowserControls();
    const problemSearchInputDOM = getProblemSearchInputDOM();
    if (problemSearchInputDOM && problemSearchInputDOM.value !== store.problemHistoryQuery) {
        problemSearchInputDOM.value = store.problemHistoryQuery;
    }

    // renderReviewTableContent(store.needReviewProblems, 1);
    await renderScheduledTableContent(store.problemHistoryProblems, 1);
    // renderCompletedTableContent(store.completedProblems, 1);
    await renderUndoButton();
    renderNoteModal();

    registerAllHandlers();
    
    // 初始化所有 tooltip
    setTimeout(() => {
        initializeTooltips();
    }, 200);
    
    // 添加全局点击事件监听器，点击页面任何地方时隐藏所有 tooltip
    document.addEventListener('click', (e) => {
        // 如果点击的不是 tooltip 触发元素，则隐藏所有 tooltip
        if (!e.target.hasAttribute('data-bs-toggle') || e.target.getAttribute('data-bs-toggle') !== 'tooltip') {
            document.querySelectorAll('.tooltip').forEach(el => {
                el.remove();
            });
        }
    });
}
