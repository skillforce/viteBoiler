import { clsx } from 'clsx';
import cls from './TablePage.module.scss';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRouteHome } from '@/shared/consts/router';

interface TablePageProps {
    className?: string;
}

export const TablePage = memo((props: TablePageProps) => {
    const { className } = props;
    const navigate = useNavigate();

    const redirectToHome = () => {
        navigate(getRouteHome());
    };

    return (
        <div className={clsx(cls.Table, {}, [className])}>
            TABLE PAGE
            <div>
                <button onClick={redirectToHome}>HOME</button>
            </div>
        </div>
    );
});
