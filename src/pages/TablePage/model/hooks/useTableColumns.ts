import { CommentSchema } from '@/shared/store/comments/types';
import { MRT_ColumnDef } from 'material-react-table';
import { useMemo } from 'react';

interface TableColumnsHookArguments {
    comments: CommentSchema[];
}

type GetPostIDFilterOptions = () => string[];

export const useTableColumns = (args: TableColumnsHookArguments) => {
    const { comments } = args;

    const getPostIDFilterOptions: GetPostIDFilterOptions = () =>
        Array.from(new Set(comments.map(({ postId }) => postId)));

    const columns = useMemo<MRT_ColumnDef<CommentSchema>[]>(
        () => [
            {
                header: 'ID',
                accessorKey: 'id',
                filterVariant: 'range-slider',
                muiFilterSliderProps: {
                    marks: true,
                    max: 50,
                    min: 0,
                    step: 5,
                },
            },
            {
                header: 'Name',
                accessorKey: 'name',
            },
            {
                header: 'Email',
                accessorKey: 'email',
            },
            {
                header: 'Body',
                accessorKey: 'body',
                Filter: () => null,
            },
            {
                header: 'Post ID',
                accessorKey: 'postId',
                filterVariant: 'select',
                filterSelectOptions: getPostIDFilterOptions(),
            },
        ],
        [comments],
    );

    return { columns };
};
