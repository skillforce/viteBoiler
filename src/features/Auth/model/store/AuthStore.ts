import { create } from 'zustand';

interface AuthStoreSchema {
    isLoggedIn: boolean; // SPECIFY SCHEMA FOR CURRENT STORE
    setLoggedIn: (newStatus: boolean) => void; // SPECIFY SCHEMA FOR CURRENT STORE
}

export const useAuthStore = create<AuthStoreSchema>((set) => ({
    isLoggedIn: false,
    name: 'dscsdcsdcsdcsdc',
    setLoggedIn: (newStatus: boolean) =>
        set((state) => ({ ...state, isLoggedIn: newStatus })),
}));
