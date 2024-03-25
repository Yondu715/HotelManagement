import { FC } from 'react';
import styles from './InputFilter.module.css';
import { Datepicker } from '@/shared/ui/datepicker';
import dayjs from 'dayjs';

interface IInputFilter {
    label?: string,
    onChange?: (date: string | string[]) => void,
    required?: boolean
}

export const InputFilter: FC<IInputFilter> = ({ label, onChange, required = false }) => {

    const onChangeHandler = (_: dayjs.Dayjs, dateString: string | string[]) => {
        onChange?.(dateString)
    }

    return (
        <div className={styles.filter}>
            <label>{label}</label>
            <Datepicker className={styles.input} required={required} onChange={onChangeHandler}></Datepicker>
        </div>
    );
};