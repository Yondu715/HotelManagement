import { FC, MouseEventHandler, ReactNode } from 'react';
import { Button as Btn } from 'antd';
import styles from './Button.module.css';

interface IButton {
    onClick?: MouseEventHandler<HTMLElement>,
    className?: string,
    loading?: boolean,
    children?: ReactNode
}

export const Button: FC<IButton> = ({ children, onClick, className, loading = false}) => {
    return (
        <Btn onClick={onClick} loading={loading} className={[styles.button, className].join(' ')}>
            {children}
        </Btn>
    );
}