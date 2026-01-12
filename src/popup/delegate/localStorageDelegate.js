import { StorageDelegate } from "./storageDelegate";
import browser from "../../shared/browser.js";

export const getLocalStorageData = async (key) => {
    try {
        const result = await browser.storage.local.get(key);
        if (result === undefined || result[key] === undefined) {
            throw new Error(key);
        }
        return result[key];
    } catch (error) {
        console.log(`get local storage data failed for key = ${key}`);
    }
}

export const setLocalStorageData = async (key, val) => {
    try {
        await browser.storage.local.set({ [key]: val });
    } catch (error) {
        console.log(error);
    }
}

class LocalStorageDelegate extends StorageDelegate {
    constructor(){
        super();
        this.get = getLocalStorageData;
        this.set = setLocalStorageData;
    }
}

const localStorageDelegate = new LocalStorageDelegate();
export default localStorageDelegate;