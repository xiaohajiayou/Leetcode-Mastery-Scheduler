import { setConfigJumpHandlers } from "./configJumpHandler";
import { setModeSwitchHandlers } from "./modeSwitchHandler";
import { setPageJumpHandlers } from "./pageJumpHandler"
import { setPopupUnloadHandler } from "./popupUnloadHandler";
import { setRecordOperationHandlers } from "./recordOperationHandler";

export const registerAllHandlers = () => {
    setPageJumpHandlers();
    setModeSwitchHandlers();
    setRecordOperationHandlers();
    setConfigJumpHandlers();
    setPopupUnloadHandler();
}