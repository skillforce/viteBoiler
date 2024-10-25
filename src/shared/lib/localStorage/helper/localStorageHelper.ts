import { StorageKeysType } from '../localStorageKeys/localStorageKeys.ts';

export const loadLocalStorageState = (stateName: StorageKeysType) => {
    try {
        const serializedState = localStorage.getItem(stateName);

        if (serializedState === null) {
            return undefined;
        }

        return JSON.parse(serializedState);
    } catch (err) {
        console.log(err);
        return undefined;
    }
};

export const saveLocalStorageState = <T>(
    keyName: StorageKeysType,
    value: T,
): void => {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(keyName, serializedState);
    } catch (err) {
        console.log(err);
        throw new Error("Can't save changes in local storage");
    }
};

export const removeLocalStorageKey = (stateName: StorageKeysType) => {
    try {
        localStorage.removeItem(stateName);
    } catch (err) {
        console.log(err);
        return undefined;
    }
};
