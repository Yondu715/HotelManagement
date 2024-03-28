import { useUnit } from 'effector-react';
import { sessionModel } from '@/entity/session';
import styles from './Header.module.css';

export const Header = () => {
    const user = useUnit(sessionModel.$user);

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                Sunset Resort
            </div>
            <div className={styles.userInfo}>
                <span className={styles.name}>
                    {user?.name}
                </span>
                <span className={styles.email}>
                    {user?.email}
                </span>
            </div>
        </div>
    );
}