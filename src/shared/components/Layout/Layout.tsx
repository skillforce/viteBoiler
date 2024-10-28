import { ReactNode } from 'react';
import s from './Layout.module.scss';
import { Outlet, useOutletContext } from 'react-router-dom';
import { useAuthStore } from '@features/Auth';

type AuthContext = {
    isAuthenticated: boolean;
};
export function useAuthContext() {
    return useOutletContext<AuthContext>();
}

export const Layout = () => {
    const { isLoggedIn } = useAuthStore();
    console.log(isLoggedIn);
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
