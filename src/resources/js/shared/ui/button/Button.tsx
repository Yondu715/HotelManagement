import { FC, MouseEventHandler } from 'react';
import { Button as Btn } from 'antd';
import styles from './Button.module.css';

interface IButton {
    text?: string,
    onClick?: MouseEventHandler,
    className?: string,
    loading?: boolean
}

export const Button: FC<IButton> = ({text, onClick, className, loading = false}) => {
    return (
        <Btn onClick={onClick} loading={loading} className={[styles.button, className].join(' ')}>
            {text}
        </Btn>
    );
}