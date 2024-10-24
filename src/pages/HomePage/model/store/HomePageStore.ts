import { create } from 'zustand';

interface HomePageStoreSchema {
    type: any; // SPECIFY SCHEMA FOR CURRENT STORE
}

export const HomePageStore = create<HomePageStoreSchema>(() => ({}));
