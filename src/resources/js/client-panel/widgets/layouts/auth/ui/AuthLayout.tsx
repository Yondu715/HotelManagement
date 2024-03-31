import { FC, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { setNavigate } from '@/client/shared/routing/routes';
import styles from './AuthLayout.module.css';

export const AuthLayout: FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setNavigate(navigate);
    }, []);

    return (
        <div className={styles.layout}>
            <Outlet />
        </div>);
};