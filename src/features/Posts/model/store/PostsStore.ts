import { create } from 'zustand';
import { PostSchema } from '@entities/Post';

interface PostsStoreSchema {
    posts: PostSchema[];
    setPosts: (posts: PostSchema[]) => void;
    deletePostById: (postId: number) => void;
    addNewPost: (post: PostSchema) => void;
    updatePostById: (postId: number, updatedData: PostSchema) => void;
}

export const usePostsStore = create<PostsStoreSchema>((set) => ({
    posts: [],
    setPosts: (posts: PostSchema[]) => set({ posts }),
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
