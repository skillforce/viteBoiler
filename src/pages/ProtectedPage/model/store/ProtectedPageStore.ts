import { create } from 'zustand';

interface ProtectedPageStoreSchema {
    type: any; // SPECIFY SCHEMA FOR CURRENT STORE
}

export const ProtectedPageStore = create<ProtectedPageStoreSchema>(() => ({}));
