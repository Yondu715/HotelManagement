import { LoginForm } from '@/features/auth/login';
import styles from './LoginPage.module.css';

export const LoginPage = () => {
    return (
        <div className={styles.page}>
            <LoginForm />
        </div>
    );
}