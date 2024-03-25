import { FC } from 'react';
import styles from './Title.module.css';

interface ITitle {
    text: string
}

export const Title: FC<ITitle> = ({ text }) => {
    return (
        <span className={styles.title}>{text}</span>
    );
};