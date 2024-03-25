import { Sidebar } from '@/widgets/sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './RootLayout.module.css';
import { useEffect } from 'react';
import { setNavigate } from '@/shared/routing/routes';

export const RootLayout = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setNavigate(navigate);
    }, []);

    return (
        <div className={styles.layout}>
            <div className={styles.sidebarContainer}>
                <Sidebar />
            </div>
            <div className={styles.pageContainer}>
                <Outlet />
            </div>
        </div>
    );
}