export { Posts } from './ui/Posts/Posts';
export { usePostsStore } from './model/store/PostsStore';
export {
    useCreatePost,
    useDeletePost,
    useGetPosts,
    useUpdatePost,
} from './model/api/postsQueryHooks.ts';
