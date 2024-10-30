import { apiClient } from '@shared/lib/apiClient/apiClient.ts';
import { PostSchema } from '@entities/Post';

export const ADD_POST_API_REQUESTS = {
    createPost: async (postTitle: string): Promise<PostSchema> => {
        const newPost: Partial<PostSchema> = {
            body: 'testBody',
            title: postTitle,
            userId: 1,
        };
        const { data } = await apiClient.post('/posts', newPost);
        return data;
    },
};
