import { createBrowserRouter, redirect } from 'react-router-dom';
import { LoginPage } from '@pages/LoginPage';
import { ProtectedPage } from '@pages/ProtectedPage';
import { ProtectedRoutes } from '@app/router/utils/ProtectedRoutes.tsx';
import { MainLayout } from '@entities/MainLayout';

export const appBrowserRouterConfig = createBrowserRouter([
    {
        path: '',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <LoginPage />,
            },
            {
                element: <ProtectedRoutes />,
                children: [
                    {
                        path: 'protected',
                        element: <ProtectedPage />,
                    },
                ],
            },
        ],
    },
    {
        path: '*',
        loader: () => redirect('/'),
    },
]);
