import { setConfigJumpHandlers } from "./configJumpHandler";
import { setModeSwitchHandlers } from "./modeSwitchHandler";
import { setPageJumpHandlers } from "./pageJumpHandler"
import { setPopupUnloadHandler } from "./popupUnloadHandler";
import { setRecordOperationHandlers } from "./recordOperationHandler";
import { setNoteHandlers } from "./noteHandler";

export const registerAllHandlers = () => {
    setPageJumpHandlers();
    setModeSwitchHandlers();
    setRecordOperationHandlers();
    setConfigJumpHandlers();
    setPopupUnloadHandler();
    setNoteHandlers();
}