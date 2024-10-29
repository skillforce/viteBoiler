import { apiClient } from '@/shared/lib/apiClient/apiClient';
import { CommentSchema } from './types';
import { useQuery } from '@tanstack/react-query';

const FETCH_COMMENTS_QUERY_KEY = ['Comments'];

const fetchComments = async (): Promise<CommentSchema[]> => {
    const { data } = await apiClient.get(`/comments`);
    return data;
};

export const useGetComments = () => {
    return useQuery<CommentSchema[], Error>({
        queryKey: FETCH_COMMENTS_QUERY_KEY,
        queryFn: fetchComments,
        staleTime: Infinity,
    });
};
