export const loadLocalStorageState = (stateName: string) => {
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

export const saveLocalStorageState = (stateName: string, value: any) => {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(stateName, serializedState);
    } catch (err) {
        console.log(err);
        throw new Error("Can't save changes in local storage");
    }
};

export const removeLocalStorageKey = (stateName: string) => {
    try {
        localStorage.removeItem(stateName);
    } catch (err) {
        console.log(err);
        return undefined;
    }
};
