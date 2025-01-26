import { configButtonDOMs } from "../util/doms"

export const setConfigJumpHandlers = () => {
    if (configButtonDOMs !== undefined) {
        Array.prototype.forEach.call(configButtonDOMs, (btn) => btn.onclick = async (e) => {
            chrome.runtime.openOptionsPage();
        });
    }
}