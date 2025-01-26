import { syncProblems } from "../service/problemService";
import { popupPageDOM } from "../util/doms"


export const setPopupUnloadHandler = () => {
    if (popupPageDOM !== undefined) {
        
        popupPageDOM.addEventListener('unload', async () => {    
            await syncProblems();
        })
    }
}