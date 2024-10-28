import { create } from 'zustand';
import { PostSchema } from '../types/posts.ts';

interface ApiExampleStoreSchema {
    posts: PostSchema[];
    newPostValue: string;
    setPosts: (posts: PostSchema[]) => void;
    setNewPostValue: (newPostValue: string) => void;
    addNewPost: (post: PostSchema) => void;
    deletePostById: (postId: number) => void;
    updatePostById: (postId: number, updatedData: PostSchema) => void;
}

export const useApiExampleStore = create<ApiExampleStoreSchema>((set) => ({
    posts: [],
    newPostValue: '',
    setPosts: (posts: PostSchema[]) => set({ posts }),
    setNewPostValue: (newPostValue: string) => set({ newPostValue }),
    addNewPost: (post: PostSchema) =>
        set((state) => ({ posts: [post, ...state.posts] })),
    deletePostById: (postId: number) =>
        set((state) => ({
            posts: state.posts.filter((post) => post.id !== postId),
        })),
    updatePostById: (postId: number, updatedData: PostSchema) => {
        set((state) => ({
            posts: state.posts.map((post) =>
                postId === post.id ? updatedData : post,
            ),
        }));
    },
}));
