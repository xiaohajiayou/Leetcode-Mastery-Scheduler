import { getLocalStorageData, setLocalStorageData } from "../delegate/localStorageDelegate"
import { CN_MODE } from "../util/keys"

export const isInCnMode = async () => {
    let cnMode = await getLocalStorageData(CN_MODE);
    console.log(`current cnMode is ${cnMode}`);
    if (cnMode === undefined) {
        await setLocalStorageData(CN_MODE, false);
        cnMode = false;
    }
    return cnMode;
}

export const toggleMode = async () => {
    const cnMode = await isInCnMode();
    console.log(`got current cnMode before toggle}`);
    await setLocalStorageData(CN_MODE, !cnMode);
    console.log("cnMode toggled");
}