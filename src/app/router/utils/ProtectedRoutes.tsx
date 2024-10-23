import { Navigate, Outlet } from 'react-router-dom';
import {
    loadLocalStorageState,
    LOCAL_STORAGE_KEYS,
} from '@shared/lib/localStorage';

export const ProtectedRoutes = () => {
    const localStorageToken = loadLocalStorageState(
        LOCAL_STORAGE_KEYS.AUTH_TOKEN,
    );

    return localStorageToken ? <Outlet /> : <Navigate to="/" replace />;
};
