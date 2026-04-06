import { store } from "../store";
import { deleteProblem, markProblemAsMastered, resetProblem } from "../service/problemService";
import { renderAll } from "../view/view";
import { undoLatestOperation } from "../service/operationHistoryService";

const initTooltips = () => {
    store.tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    store.tooltipList = [...store.tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}

const hide_all_tooltips = () => {
    if (!store.tooltipList) return;
    store.tooltipList.forEach(tooltip => tooltip._hideModalHandler());
}

const handleCheckButtonClick = async (event) => {
    const button = event.target.closest('.check-btn-mark');
    if (!button) return;

    hide_all_tooltips();
    await markProblemAsMastered(button.dataset.id);
    await renderAll();
};

const handleDeleteButtonClick = async (event) => {
    const button = event.target.closest('.delete-btn-mark');
    if (!button) return;

    hide_all_tooltips();
    await deleteProblem(button.dataset.id);
    await renderAll();
};

const handleResetButtonClick = async (event) => {
    const button = event.target.closest('.reset-btn-mark');
    if (!button) return;

    hide_all_tooltips();
    await resetProblem(button.dataset.id);
    await renderAll();
};

const handleUndoButtonClick = async (event) => {
    const button = event.target.closest('.undo-ops-btn');
    if (!button) return;

    hide_all_tooltips();
    await undoLatestOperation();
    await renderAll();
};

export const setRecordOperationHandlers = () => {

    initTooltips();

    // Delegate actions so re-rendered table rows after search/filter still work.
    document.removeEventListener('click', handleCheckButtonClick);
    document.removeEventListener('click', handleDeleteButtonClick);
    document.removeEventListener('click', handleResetButtonClick);
    document.removeEventListener('click', handleUndoButtonClick);

    document.addEventListener('click', handleCheckButtonClick);
    document.addEventListener('click', handleDeleteButtonClick);
    document.addEventListener('click', handleResetButtonClick);
    document.addEventListener('click', handleUndoButtonClick);
}
