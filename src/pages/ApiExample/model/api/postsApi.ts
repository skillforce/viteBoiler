import { PostSchema } from '../types/posts.ts';
import { apiClient } from '@shared/lib/apiClient/apiClient.ts';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useApiExampleStore } from '../store/ApiExampleStore.ts';

const FETCH_POSTS_QUERY_KEY = ['Posts'];

const fetchPosts = async (): Promise<PostSchema[]> => {
    const { data } = await apiClient.get(`/posts`);
    return data;
};

const deletePost = async (postId: number) => {
    const response = await apiClient.delete(`/posts/${postId}`);
    if (response.status !== 200) {
        throw new Error('Failed to delete post');
    }
    return postId;
};

const updatePostByIdRequest = async (
    postId: number,
): Promise<{ updatedData: PostSchema; postId: number }> => {
    const updatedPost: Partial<PostSchema> = {
        body: 'UPDATED',
        title: 'UPDATED',
    };
    const { data } = await apiClient.put(`/posts/${postId}`, updatedPost);

    return { updatedData: data, postId };
};

const createPost = async (postTitle: string): Promise<PostSchema> => {
    const newPost: Partial<PostSchema> = {
        body: 'testBody',
        title: postTitle,
        userId: 1,
    };
    const { data } = await apiClient.post('/posts', newPost);
    return data;
};

export const useGetPosts = () => {
    return useQuery<PostSchema[], Error>({
        queryKey: FETCH_POSTS_QUERY_KEY,
        queryFn: fetchPosts,
    });
};

export const useCreatePost = () => {
    const addNewPost = useApiExampleStore((state) => state.addNewPost);

    return useMutation<PostSchema, Error, string>({
        mutationFn: (newPosTitle: string) => createPost(newPosTitle),
        onSuccess: (post) => {
            addNewPost(post);
        },
        onError: (error) => {
            console.log(error);
            // handle error
        },
    });
};
export const useDeletePost = () => {
    const deletePostById = useApiExampleStore((state) => state.deletePostById);

    return useMutation<number, Error, number>({
        mutationFn: (postId: number) => deletePost(postId),
        onSuccess: (postId) => {
            deletePostById(postId);
        },
        onError: (error) => {
            console.log(error);
            // handle error
        },
    });
};
export const useUpdatePost = () => {
    const updatePostById = useApiExampleStore((state) => state.updatePostById);

    return useMutation<
        { updatedData: PostSchema; postId: number },
        Error,
        number
    >({
        mutationFn: (postId: number) => updatePostByIdRequest(postId),
        onSuccess: ({ postId, updatedData }) => {
            updatePostById(postId, updatedData);
        },
        onError: (error) => {
            console.log(error);
            // handle error
        },
    });
};
