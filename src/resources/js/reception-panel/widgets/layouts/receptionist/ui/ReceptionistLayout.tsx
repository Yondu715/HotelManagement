import { Sidebar } from '@/reception/widgets/sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { setNavigate } from '@/reception/shared/routing/routes';
import { layoutMounted } from '../model/store';
import { Header } from '@/reception/widgets/header';
import styles from './ReceptionistLayout.module.css';

export const ReceptionistLayout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        layoutMounted();
        setNavigate(navigate);
    }, []);

    return (
        <div className={styles.layout}>
            <Header />
            <div className={styles.main}>
                <div className={styles.sidebarContainer}>
                    <Sidebar />
                </div>
                <div className={styles.pageContainer}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}