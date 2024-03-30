import { Modal as MD, ModalProps } from 'antd';
import { FC } from 'react';

export const Modal: FC<ModalProps> = ({ children, ...props }) => {
    return (
        <MD {...props} >
            {children}
        </MD>
    );
};