import { useMutation } from '@tanstack/react-query';
import { usePostsStore } from '@features/Posts/model/store/PostsStore.ts';
import { PostSchema } from '@entities/Post';
import { ADD_POST_API_REQUESTS } from '@features/AddPost';

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
