import { clsx } from 'clsx';
import cls from './Post.module.scss';
import { memo } from 'react';

interface PostProps {
    className?: string;
    id: number;
    title: string;
    onDelete: (postId: number) => void;
    onUpdate: (postId: number) => void;
}

export const Post = memo((props: PostProps) => {
    const { className, id, title, onUpdate, onDelete } = props;

    const onUpdatePost = () => {
        onUpdate(id);
    };
    const onDeletePost = () => {
        onDelete(id);
    };

    return (
        <div key={id} className={clsx(cls.post, {}, [className])}>
            TITLE: {title}
            <div className={cls.buttonGroup}>
                <button onClick={onUpdatePost}>UPDATE</button>
                <button onClick={onDeletePost}>DELETE</button>
            </div>
        </div>
    );
});
