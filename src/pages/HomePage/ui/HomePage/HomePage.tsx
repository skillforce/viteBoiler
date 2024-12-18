import { clsx } from 'clsx';
import cls from './HomePage.module.scss';
import { memo } from 'react';
import {
    LOCAL_STORAGE_KEYS,
    removeLocalStorageKey,
} from '@shared/lib/localStorage';
import {
    getRouteApiExample,
    getRouteLogin,
    getRouteTablePage,
} from '@shared/consts/router.ts';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@features/Auth';

interface HomePageProps {
    className?: string;
}

export const HomePage = memo((props: HomePageProps) => {
    const { className } = props;
    const navigate = useNavigate();
    const { setLoggedIn } = useAuthStore();

    const redirectToTable = () => {
        navigate(getRouteTablePage());
    };
    const redirectToApiExample = () => {
        navigate(getRouteApiExample());
    };

    const onLogout = () => {
        removeLocalStorageKey(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
        setLoggedIn(false);
        navigate(getRouteLogin());
    };

    return (
        <div className={clsx(cls.HomePage, {}, [className])}>
            HOME PAGE
            <h1>API URL(ENV) : {import.meta.env.VITE_API_BASE_URL}</h1>
            <div>
                <button onClick={redirectToTable}>TABLE</button>
                <button onClick={redirectToApiExample}>API EXAMPLE</button>
                <button onClick={onLogout}> LOGOUT</button>
            </div>
        </div>
    );
});
