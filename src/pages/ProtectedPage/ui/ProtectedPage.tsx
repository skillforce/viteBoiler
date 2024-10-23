import {
    LOCAL_STORAGE_KEYS,
    removeLocalStorageKey,
} from '@shared/lib/localStorage';
import { useNavigate } from 'react-router-dom';
import { Counter } from '@features/Counter';

export const ProtectedPage = () => {
    const navigate = useNavigate();

    const onBtnClick = () => {
        removeLocalStorageKey(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
        navigate('/login');
    };
    return (
        <div>
            Protected Page
            <button onClick={onBtnClick}>Logout</button>
            <Counter />
        </div>
    );
};
