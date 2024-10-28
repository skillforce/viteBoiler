import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthStoreSchema {
    isLoggedIn: boolean; // SPECIFY SCHEMA FOR CURRENT STORE
    setLoggedIn: (newStatus: boolean) => void; // SPECIFY SCHEMA FOR CURRENT STORE
}

export const useAuthStore = create<AuthStoreSchema>()(
    persist(
        (set) => ({
            isLoggedIn: false,
            setLoggedIn: (newStatus: boolean) =>
                set((state) => ({ ...state, isLoggedIn: newStatus })),
        }),
        {
            name: 'auth-storage', // Name of the item in local storage
            partialize: (state) => ({ isLoggedIn: state.isLoggedIn }),
        },
    ),
);
