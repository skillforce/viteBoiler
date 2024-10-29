import { useOutletContext } from 'react-router-dom';

export type AuthContext = {
    isAuthenticated: boolean;
};

export function useAuthContext() {
    return useOutletContext<AuthContext>();
}
