import { FC } from 'react';
import { SelectProps, Select as Slct } from 'antd';
import styles from './Select.module.css';

export type Option = {
    label: string | number,
    value: string | number
}


export const Select: FC<SelectProps> = (props) => {
    return (
        <Slct className={styles.select} {...props} />
    );
};