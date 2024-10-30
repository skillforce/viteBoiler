import { useMutation, useQuery } from '@tanstack/react-query';
import { POSTS_API_REQUESTS } from '../api/postsApi.ts';
import { usePostsStore } from '../../model/store/PostsStore.ts';
import { PostSchema } from '@entities/Post';
import { ADD_POST_API_REQUESTS } from '@features/AddPost/model/api/addPostApi.ts';

const FETCH_POSTS_QUERY_KEY = ['Posts'];

export const useGetPosts = () => {
    return useQuery<PostSchema[], Error>({
        queryKey: FETCH_POSTS_QUERY_KEY,
        queryFn: POSTS_API_REQUESTS.fetchPosts,
    });
};

export const useCreatePost = () => {
    const addNewPost = usePostsStore((state) => state.addNewPost);

    return useMutation<PostSchema, Error, string>({
        mutationFn: (newPosTitle: string) =>
            ADD_POST_API_REQUESTS.createPost(newPosTitle),
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
    const deletePostById = usePostsStore((state) => state.deletePostById);

    return useMutation<number, Error, number>({
        mutationFn: (postId: number) => POSTS_API_REQUESTS.deletePost(postId),
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
    const updatePostById = usePostsStore((state) => state.updatePostById);

    return useMutation<
        { updatedData: PostSchema; postId: number },
        Error,
        number
    >({
        mutationFn: (postId: number) =>
            POSTS_API_REQUESTS.updatePostByIdRequest(postId),
        onSuccess: ({ postId, updatedData }) => {
            updatePostById(postId, updatedData);
        },
        onError: (error) => {
            console.log(error);
            // handle error
        },
    });
};
