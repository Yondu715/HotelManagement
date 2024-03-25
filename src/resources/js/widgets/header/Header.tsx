import styles from './Header.module.css';

export const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.header}>
                <div className={styles.logo}>Luxury Hotel</div>
                <div className={styles.navbarContainer}>
                    <div className={styles.navbar}>
                        <div className={styles.navbarItem}>
                            Комнаты
                        </div>
                    </div>
                    <div className={styles.headerAction}>
                        <button>Войти</button>
                    </div>
                </div>
            </div>
        </div>
    );
};