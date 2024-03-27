import styles from './Header.module.css';

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                Sunset Resort
            </div>
            <div>
                user
            </div>
        </div>
    );
}