import { FC } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import styles from './Sidebar.module.css';

interface ILink {
    label?: string,
    to: string
}

export const CustomLink: FC<ILink> = ({ label, to }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    return (
        <div className={[isActive ? styles.active : '', styles.link].join(' ')}>
            <Link to={to}>{label}</Link>
        </div>
    );
};
