import { FC, HTMLProps } from 'react';
import styles from './Input.module.css';


export const Input: FC<HTMLProps<HTMLInputElement>> = ({onClick, ...props}) => {
    return (
        <input
            className={styles.input}
            onClick={onClick}
            {...props}
        />
    );
};