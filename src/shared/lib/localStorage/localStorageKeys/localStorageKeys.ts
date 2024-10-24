export const LOCAL_STORAGE_KEYS = {
    AUTH_TOKEN: 'AUTH_TOKEN',
} as const;

export type StorageKeysType =
    (typeof LOCAL_STORAGE_KEYS)[keyof typeof LOCAL_STORAGE_KEYS];
