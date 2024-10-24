import { FormEvent, useEffect, useState } from 'react';
import s from './LoginPage.module.css';
import {
    loadLocalStorageState,
    LOCAL_STORAGE_KEYS,
    saveLocalStorageState,
} from '@shared/lib/localStorage';
import { clsx } from 'clsx';
import { useNavigate } from 'react-router-dom';
import { getRouteHome } from '@shared/consts/router.ts';
import { useAuthStore } from '@features/Auth';

interface LoginPageProps {
    className?: string;
}

const LoginPage = ({ className }: LoginPageProps) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    const { setLoggedIn, isLoggedIn } = useAuthStore();
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (username) {
            saveLocalStorageState(LOCAL_STORAGE_KEYS.AUTH_TOKEN, username);
            navigate(getRouteHome());
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            navigate(getRouteHome());
        } else {
            setLoggedIn(!!loadLocalStorageState(LOCAL_STORAGE_KEYS.AUTH_TOKEN));
        }
    }, [isLoggedIn]);

    return (
        <div className={clsx(s.container, {}, [className])}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className={s.formGroup}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <button type="submit" className={s.button}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
