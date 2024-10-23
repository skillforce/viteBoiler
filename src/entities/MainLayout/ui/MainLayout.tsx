import cls from './MainLayout.module.css';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
    return (
        <div>
            <header>
                <h1>PatronPay</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="/sdcsdcsdcdscsdcdscsd">Unexist page</a>
                        </li>
                        <li>
                            <a href="/protected">Protected</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className={cls.mainLayoutContainer}>
                <Outlet />
            </main>
        </div>
    );
};
