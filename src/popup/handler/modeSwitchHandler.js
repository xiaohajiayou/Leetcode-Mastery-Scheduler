import { toggleMode } from "../service/modeService";
import { switchButtonDOM } from "../util/doms";
import { renderAll } from "../view/view";
import { initializeReviewPage} from '../daily-review';

export const switchMode = async () => {
    await toggleMode();
    await renderAll();
    // 更新每日复习视图
    await initializeReviewPage();
}

export const setModeSwitchHandlers = () => {
    switchButtonDOM.onclick = switchMode;
}