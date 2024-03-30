import { FC, ReactNode } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import styles from './CustomLink.module.css';

interface ILink {
    label?: string,
    to: string,
    icon?: ReactNode
}

export const CustomLink: FC<ILink> = ({ label, to, icon }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <div className={[isActive ? styles.active : '', styles.link].join(' ')}>
            <div className={styles.indicator} />
            <div className={styles.label}>
                {icon}
                <Link to={to}>{label}</Link>
            </div>
        </div>
    );
};
