import { Outlet, redirect, RouteObject } from 'react-router-dom';
import { HomePage } from '@pages/HomePage';
import {
    getRouteHome,
    getRouteLogin,
    getRouteProtectedPage,
} from '@shared/consts/router.ts';
import { ProtectedPage } from '@pages/ProtectedPage';
import { LoginPage } from '@pages/LoginPage';

export const privateRoutes: RouteObject[] = [
    {
        element: <HomePage />,
        path: getRouteHome(),
    },
    {
        element: <ProtectedPage />,
        path: getRouteProtectedPage(),
    },
];

export const publicRoutes = [
    {
        children: [
            {
                element: <LoginPage />,
                path: getRouteLogin(),
            },
            {
                path: '*',
                loader: async () => {
                    return redirect('/');
                },
                element: <LoginPage />,
            },
        ],
        element: <Outlet />,
    },
];
