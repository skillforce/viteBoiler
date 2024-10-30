import { clsx } from 'clsx';
import cls from './Posts.module.scss';
import { memo, useCallback } from 'react';
import { Post, PostSchema } from '@entities/Post';
import {
    useDeletePost,
    useUpdatePost,
} from '../../model/api/postsQueryHooks.ts';

interface PostsProps {
    className?: string;
    posts?: PostSchema[];
}

export const Posts = memo((props: PostsProps) => {
    const { className, posts } = props;
    const { mutate: deletePostById } = useDeletePost();
    const { mutate: updatePostById } = useUpdatePost();

    const onDeletePostById = useCallback(
        //need to discuss
        (postId: number) => {
            deletePostById(postId);
        },
        [deletePostById],
    );

    const onUpdatePostById = useCallback(
        (postId: number) => {
            updatePostById(postId);
        },
        [updatePostById],
    );

    if (!posts) {
        return null;
    }

    return (
        <div className={clsx('', {}, [className])}>
            <div>POSTS:</div>
            <div className={cls.posts}>
                {posts.map(({ id, title }) => (
                    <Post
                        id={id}
                        title={title}
                        onDelete={onDeletePostById}
                        onUpdate={onUpdatePostById}
                    />
                ))}
            </div>
        </div>
    );
});
