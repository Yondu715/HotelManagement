import { FC, FormEventHandler, MouseEventHandler, ReactNode } from 'react';
import { Button as Btn } from 'antd';
import styles from './Button.module.css';

interface IButton {
    onClick?: MouseEventHandler<HTMLElement>,
    className?: string,
    loading?: boolean,
    children?: ReactNode,
    onSubmit?: FormEventHandler,
    type?: "button" | "submit"
}

export const Button: FC<IButton> = ({ children, onClick, className, loading = false, onSubmit, type }) => {
    return (
        <Btn
            htmlType={type ?? "button"}
            onClick={onClick}
            onSubmit={onSubmit}
            loading={loading}
            className={[styles.button, className].join(' ')}
        >
            {children}
        </Btn>
    );
}