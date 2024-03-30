import { FC, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './AuthLayout.module.css';
import { setNavigate } from '@/shared/routing/routes';

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