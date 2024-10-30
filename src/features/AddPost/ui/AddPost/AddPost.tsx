import { clsx } from 'clsx';
import cls from './AddPost.module.scss';
import { ChangeEvent, memo } from 'react';
import { useAddPostStore } from '../../model/store/AddPostStore.ts';
import { useCreatePost } from '@features/AddPost/model/api/postsQueryHooks.ts';

interface AddPostProps {
    className?: string;
}

export const AddPost = memo((props: AddPostProps) => {
    const { className } = props;
    const newPostValue = useAddPostStore((state) => state.newPostValue);
    const setNewPostValue = useAddPostStore((state) => state.setNewPostValue);
    const { mutate: createPost } = useCreatePost();

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPostValue(e.target.value);
    };

    const onAddNewPost = () => {
        createPost(newPostValue);
        setNewPostValue('');
    };

    return (
        <div className={clsx(cls.addPost, {}, [className])}>
            <div>ADD POST:</div>
            <input type="text" value={newPostValue} onChange={onInputChange} />
            <button onClick={onAddNewPost}>ADD POST</button>
        </div>
    );
});
