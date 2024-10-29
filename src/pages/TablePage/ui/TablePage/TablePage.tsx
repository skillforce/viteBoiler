import { clsx } from 'clsx';
import { memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRouteHome } from '@/shared/consts/router';
import {
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';
import { useCommentsStore } from '@/shared/store/comments/store';
import { useGetComments } from '@/shared/store/comments/api';
import { useTableColumns } from '../../model/hooks/useTableColumns';

interface TablePageProps {
    className?: string;
}

export const TablePage = memo((props: TablePageProps) => {
    const { className } = props;
    const navigate = useNavigate();

    const { data } = useGetComments();

    const comments = useCommentsStore((state) => state.comments);
    const setComments = useCommentsStore((state) => state.setComments);

    const { columns } = useTableColumns({ comments });

    const table = useMaterialReactTable({
        columns,
        data: comments,
        initialState: {
            showGlobalFilter: true,
            showColumnFilters: true,
        },
        positionGlobalFilter: 'left',
    });

    useEffect(() => {
        if (data) {
            setComments(
                data.map((data) => ({
                    ...data,
                    postId: data.postId.toString(),
                })),
            );
        }
    }, [data, setComments]);

    const redirectToHome = () => {
        navigate(getRouteHome());
    };

    return (
        <div className={clsx('', {}, [className])}>
            TABLE PAGE
            <div>
                <button onClick={redirectToHome}>HOME</button>
            </div>
            <MaterialReactTable table={table} />
        </div>
    );
});
