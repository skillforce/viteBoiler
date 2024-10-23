import { FormEvent, useState } from 'react';
import styles from './LoginPage.module.css';
import {
    LOCAL_STORAGE_KEYS,
    saveLocalStorageState,
} from '@shared/lib/localStorage';

const LoginPage = () => {
    const [username, setUsername] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (username) {
            saveLocalStorageState(LOCAL_STORAGE_KEYS.AUTH_TOKEN, '123');
        }
    };

    return (
        <div className={styles.container}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <button type="submit" className={styles.button}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
