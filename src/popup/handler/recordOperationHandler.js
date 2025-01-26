import { checkButtonDOMs, deleteButtonDOMs, resetButtonDOMs, undoButtonDOMs } from "../util/doms";
import { store } from "../store";
import { deleteProblem, markProblemAsMastered, resetProblem } from "../service/problemService";
import { renderAll } from "../view/view";
import { undoLatestOperation } from "../service/operationHistoryService";

const initTooltips = () => {
    store.tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    store.tooltipList = [...store.tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}

const hide_all_tooltips = () => {
    store.tooltipList.forEach(tooltip => tooltip._hideModalHandler());
}

export const setRecordOperationHandlers = () => {

    initTooltips();

    if (checkButtonDOMs !== undefined) {
        Array.prototype.forEach.call(checkButtonDOMs, (btn) => btn.onclick = async (event) => {
            hide_all_tooltips();
            await markProblemAsMastered(event.target.dataset.id);
            await renderAll();
        });
    }

    if (deleteButtonDOMs !== undefined) {
        Array.prototype.forEach.call(deleteButtonDOMs, (btn) => btn.onclick = async (event) => {
            hide_all_tooltips();
            await deleteProblem(event.target.dataset.id);
            await renderAll();
        });
    }

    if (resetButtonDOMs !== undefined) {
        Array.prototype.forEach.call(resetButtonDOMs, (btn) => btn.onclick = async (event) => {
            hide_all_tooltips();
            await resetProblem(event.target.dataset.id);
            await renderAll();
        });
    }

    if (undoButtonDOMs !== undefined) {
        Array.prototype.forEach.call(undoButtonDOMs, (btn) => btn.onclick = async () => {
            hide_all_tooltips();
            await undoLatestOperation();
            await renderAll();
        });
    }
}