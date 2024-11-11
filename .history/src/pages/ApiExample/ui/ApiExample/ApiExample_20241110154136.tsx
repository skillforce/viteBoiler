import { clsx } from 'clsx';
import cls from './ApiExample.module.scss';
import { memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRouteHome } from '@shared/consts/router.ts';
import {
    Posts,
    useCreatePost,
    useDeletePost,
    useGetPosts,
    usePostsStore,
    useUpdatePost,
} from '@features/Posts';
import { AddPost } from '@features/AddPost';

interface ApiExampleProps {
    className?: string;
}

export const ApiExample = memo((props: ApiExampleProps) => {
    const { className } = props;
    const navigate = useNavigate();
    const {
        data,
        isLoading: isGetPostsLoading,
        error: isGetPostsError,
    } = useGetPosts();
    const { isPending: isCreateNewPostPending, isError: isCreateNewPostError } =
        useCreatePost();
    const { isPending: deletePostPending, isError: deletePostError } =
        useDeletePost();
    const { isPending: updatePostByIdPending, isError: updatePostByIdError } =
        useUpdatePost();

    const posts = usePostsStore((state) => state.posts);
    const setPosts = usePostsStore((state) => state.setPosts);

    const isPageError =
        isGetPostsError ||
        isCreateNewPostError ||
        updatePostByIdError ||
        deletePostError;
    const isPageLoading =
        isGetPostsLoading ||
        isCreateNewPostPending ||
        deletePostPending ||
        updatePostByIdPending;

    useEffect(() => {
        if (data) {
            setPosts(data);
        }
    }, [data, setPosts]);

    const onBackButtonPress = () => {
        navigate(getRouteHome());
    };

    if (isPageLoading) {
        return <div>----LOADING----</div>;
    }

    if (isPageError) {
        return <div>----ERROR----</div>;
    }

    return (
        <div className={clsx(cls.ApiExample, {}, [className])}>
            <button onClick={onBackButtonPress}>BACK</button>
            <AddPost />
            <Posts posts={posts} />
        </div>
    );
});
