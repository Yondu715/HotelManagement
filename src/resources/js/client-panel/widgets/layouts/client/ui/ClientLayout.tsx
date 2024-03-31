import { Header } from '@/client/widgets/header';
import { Outlet } from 'react-router-dom';
import styles from './ClientLayout.module.css';

export const ClientLayout = () => {
    return (
        <>
            <Header />
            <div className={styles.pageContainer}>
                <Outlet />
            </div>
        </>
    );
};