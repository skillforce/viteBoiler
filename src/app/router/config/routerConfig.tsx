import { Outlet, redirect, RouteObject } from 'react-router-dom';
import { HomePage } from '@pages/HomePage';
import {
    getRouteHome,
    getRouteLogin,
    getRouteProtectedPage,
    getRouteTablePage,
} from '@shared/consts/router.ts';
import { ProtectedPage } from '@pages/ProtectedPage';
import { LoginPage } from '@pages/LoginPage';
import { TablePage } from '@/pages/TablePage';

export const privateRoutes: RouteObject[] = [
    {
        element: <HomePage />,
        path: getRouteHome(),
    },
    {
        element: <ProtectedPage />,
        path: getRouteProtectedPage(),
    },
    {
        element: <TablePage />,
        path: getRouteTablePage(),
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
