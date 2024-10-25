import { create } from 'zustand';

interface TableStoreSchema {
    type: any; // SPECIFY SCHEMA FOR CURRENT STORE
}

export const TableStore = create<TableStoreSchema>(() => ({
    type: '123',
}));
