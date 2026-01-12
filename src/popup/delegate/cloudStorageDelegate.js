import { simpleStringHash } from "../util/utils";
import { StorageDelegate } from "./storageDelegate";
import browser from "../../shared/browser.js";


const getCloudStorageData = async (key) => {
    try {
        const result = await browser.storage.sync.get(key);
        if (result === undefined || result[key] === undefined) {
            throw new Error(key);
        }
        return result[key];
    } catch (error) {
        console.log(`get sync storage data failed for key = ${key}`);
    }
}

const setCloudStorageData = async (key, val) => {

    console.log("set to cloud");
    console.log([key, val]);

    try {
        await browser.storage.sync.set({ [key]: val });
    } catch (error) {
        console.log(error);
    }
}

const batchSetCloudStorageDate = async (object) => {
    try {
        await browser.storage.sync.set(object);
    } catch (error) {
        console.log(error);
    }
}

const batchGetCloudStorageDate = async (keyArr) => {
    try {
        const result = await browser.storage.sync.get(keyArr);
        if (result === undefined) {
            throw new Error(keyArr);
        }
        return result;
    } catch (error) {
        console.log(error);
    }
}

/**
 * sharding
 */

const shardCount = 20;

const hashKeyToShardIdx = (key) => {
    const hash = simpleStringHash(key);
    const shardIndex = (hash % shardCount + shardCount) % shardCount;
    return shardIndex;
}

const isJsonObj = (obj) => {
    return Object.getPrototypeOf(obj) === Object.prototype;
}

const shardedSetCloudStorageData = async (key, val) => {
    // val should be a JSON object
    if (!isJsonObj(val)) {
        throw "shardedSet only supports JSON type val";
    }
    const shardedVal = {};
    const objectKeys = Object.keys(val);
    Array.prototype.forEach.call(objectKeys, (objKey) => {
        const shardedIdx = hashKeyToShardIdx(objKey);
        const shardedKey = `${key}#${shardedIdx}`;
        if (!(shardedKey in shardedVal)) {
            shardedVal[shardedKey] = {};
        }
        shardedVal[shardedKey][objKey] = val[objKey];
    })
    
    console.log("set shareded data to cloud:");
    console.log(shardedVal);

    await batchSetCloudStorageDate(shardedVal);
}

const shardedGetCloudStorageData = async (key) => {
    const shardedKeyArr = [];
    for (let i = 0; i < shardCount; i++) {
        shardedKeyArr.push(`${key}#${i}`);
    }

    const vals = await batchGetCloudStorageDate(shardedKeyArr);    
    const res = {};

    if (vals === undefined) return res;
    for (const shardKey in vals) {
        Object.assign(res, vals[shardKey]);
    } 
    console.log(`get ${key} sharded from cloud`)
    console.log(res);
    return res;
}

class CloudStorageDelegate extends StorageDelegate {
    constructor(){
        super();
        this.get = shardedGetCloudStorageData;
        this.set = shardedSetCloudStorageData;
    }
}

const cloudStorageDelegate = new CloudStorageDelegate();
export default cloudStorageDelegate;