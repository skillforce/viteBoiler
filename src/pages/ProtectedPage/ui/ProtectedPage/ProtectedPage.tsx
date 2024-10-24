import { clsx } from 'clsx';
import cls from './ProtectedPage.module.scss';
import { memo } from 'react';

interface ProtectedPageProps {
    className?: string;
}

export const ProtectedPage = memo((props: ProtectedPageProps) => {
    const { className } = props;

    return (
        <div className={clsx(cls.ProtectedPage, {}, [className])}>
            ProtectedPage
        </div>
    );
});
