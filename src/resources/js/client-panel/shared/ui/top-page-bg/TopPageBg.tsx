import { FC, PropsWithChildren } from 'react';
import styles from './TopPageBg.module.css';

export const TopPageBg: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.over}>
            {children}
        </div>
    );
};