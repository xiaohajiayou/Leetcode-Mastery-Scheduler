import { configButtonDOMs } from "../util/doms"
import browser from "../../shared/browser.js";

export const setConfigJumpHandlers = () => {
    if (configButtonDOMs !== undefined) {
        Array.prototype.forEach.call(configButtonDOMs, (btn) => btn.onclick = async (e) => {
            browser.runtime.openOptionsPage();
        });
    }
}