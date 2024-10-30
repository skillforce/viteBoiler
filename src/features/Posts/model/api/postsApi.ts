import { apiClient } from '@shared/lib/apiClient/apiClient.ts';
import { PostSchema } from '@entities/Post';

export const POSTS_API_REQUESTS = {
    fetchPosts: async (): Promise<PostSchema[]> => {
        const { data } = await apiClient.get(`/posts`);
        return data;
    },
    deletePost: async (postId: number) => {
        const response = await apiClient.delete(`/posts/${postId}`);
        if (response.status !== 200) {
            throw new Error('Failed to delete post');
        }
        return postId;
    },
    updatePostByIdRequest: async (
        postId: number,
    ): Promise<{ updatedData: PostSchema; postId: number }> => {
        const updatedPost: Partial<PostSchema> = {
            body: 'UPDATED',
            title: 'UPDATED',
        };
        const { data } = await apiClient.put(`/posts/${postId}`, updatedPost);

        return { updatedData: data, postId };
    },
};
