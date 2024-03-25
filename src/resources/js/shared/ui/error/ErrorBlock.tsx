import { FC } from 'react';
import { Alert, AlertProps } from 'antd';
import styles from './ErrorBlock.module.css';


export const ErrorBlock: FC<AlertProps> = ({ message, onClose }) => {
    return (
        <Alert
            className={styles.error}
            message={message}
            type='error'
            closable
            onClose={onClose}
        />
    );
}