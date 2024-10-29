import { create } from 'zustand';
import { CommentSchema, CommentsStoreSchema } from './types';

export const useCommentsStore = create<CommentsStoreSchema>((set) => ({
    comments: [],
    setComments: (comments: CommentSchema[]) => set({ comments }),
}));
