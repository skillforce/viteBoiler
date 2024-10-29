import { ReactNode } from 'react';
import s from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import { useAuthStore } from '@features/Auth';
import { AuthContext } from '../../context/useAuthContext.ts';

export const Layout = () => {
    const { isLoggedIn } = useAuthStore();
    const isAuthenticated = isLoggedIn;

    return (
        <LayoutPrimitive>
            <Outlet context={{ isAuthenticated } satisfies AuthContext} />
        </LayoutPrimitive>
    );
};

export type LayoutPrimitiveProps = { children: ReactNode };

const LayoutPrimitive = ({ children }: LayoutPrimitiveProps) => {
    return (
        <div className={s.layout}>
            <div className={s.content}>{children}</div>
        </div>
    );
};
