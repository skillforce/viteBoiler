import { create } from 'zustand';

interface AddPostStoreSchema {
    newPostValue: string;
    setNewPostValue: (newPostValue: string) => void;
}

export const useAddPostStore = create<AddPostStoreSchema>((set) => ({
    newPostValue: '',
    setNewPostValue: (newPostValue: string) => set({ newPostValue }),
}));
