import {
    createBrowserRouter,
    Navigate,
    Outlet,
    RouterProvider,
} from 'react-router-dom';
import { Layout } from '@shared/components/Layout/Layout.tsx';
import { getRouteLogin } from '@shared/consts/router.ts';
import {
    privateRoutes,
    publicRoutes,
} from '@app/router/config/routerConfig.tsx';
import { useAuthContext } from '@shared/context/useAuthContext.ts';

function PrivateRoutes() {
    const { isAuthenticated } = useAuthContext();

    return isAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate to={getRouteLogin()} replace />
    );
}

const appBrowserRouterConfig = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            ...publicRoutes,
            {
                children: privateRoutes,
                element: <PrivateRoutes />,
            },
        ],
    },
]);

export const Router = () => {
    return <RouterProvider router={appBrowserRouterConfig} />;
};
