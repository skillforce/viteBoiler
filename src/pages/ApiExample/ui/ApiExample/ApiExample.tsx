import { clsx } from 'clsx';
import cls from './ApiExample.module.scss';
import { ChangeEvent, memo, useEffect } from 'react';
import {
    useCreatePost,
    useDeletePost,
    useGetPosts,
    useUpdatePost,
} from '../../model/api/postsQueryHooks.ts';
import { useApiExampleStore } from '../../model/store/ApiExampleStore.ts';
import { useNavigate } from 'react-router-dom';
import { getRouteHome } from '@shared/consts/router.ts';

interface ApiExampleProps {
    className?: string;
}

export const ApiExample = memo((props: ApiExampleProps) => {
    const { className } = props;
    const navigate = useNavigate();
    const { data, isLoading, error } = useGetPosts();
    const {
        mutate: createPost,
        isPending: isCreateNewPostPending,
        isError: isCreateNewPostError,
    } = useCreatePost();
    const {
        mutate: deletePostById,
        isPending: deletePostPending,
        isError: deletePostError,
    } = useDeletePost();
    const {
        mutate: updatePostById,
        isPending: updatePostByIdPending,
        isError: updatePostByIdError,
    } = useUpdatePost();

    const posts = useApiExampleStore((state) => state.posts);
    const newPostValue = useApiExampleStore((state) => state.newPostValue);
    const setPosts = useApiExampleStore((state) => state.setPosts);

    const setNewPostValue = useApiExampleStore(
        (state) => state.setNewPostValue,
    );

    useEffect(() => {
        if (data) {
            setPosts(data);
        }
    }, [data, setPosts]);

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPostValue(e.target.value);
    };

    const onAddNewPost = () => {
        createPost(newPostValue);
        setNewPostValue('');
    };

    const onDeletePostById = (postId: number) => () => {
        deletePostById(postId);
    };
    const onUpdatePostById = (postId: number) => () => {
        updatePostById(postId);
    };
    const onBackButtonPress = () => {
        navigate(getRouteHome());
    };

    if (
        isLoading ||
        isCreateNewPostPending ||
        deletePostPending ||
        updatePostByIdPending
    ) {
        return <div>----LOADING----</div>;
    }

    if (
        error ||
        isCreateNewPostError ||
        deletePostError ||
        updatePostByIdError
    ) {
        return <div>----ERROR----</div>;
    }

    return (
        <div className={clsx(cls.ApiExample, {}, [className])}>
            <button onClick={onBackButtonPress}>BACK</button>
            <div className={cls.addPost}>
                <div>ADD POST:</div>
                <input
                    type="text"
                    value={newPostValue}
                    onChange={onInputChange}
                />
                <button onClick={onAddNewPost}>ADD POST</button>
            </div>
            <div>POSTS:</div>
            <div className={cls.posts}>
                {posts.map((post) => (
                    <div key={post.id} className={cls.post}>
                        TITLE: {post.title}
                        <div className={cls.buttonGroup}>
                            <button onClick={onUpdatePostById(post.id)}>
                                UPDATE
                            </button>
                            <button onClick={onDeletePostById(post.id)}>
                                DELETE
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});
