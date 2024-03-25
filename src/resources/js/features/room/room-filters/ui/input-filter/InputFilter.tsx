import { FC } from 'react';
import styles from './InputFilter.module.css';
import { Datepicker } from '@/shared/ui/datepicker';
import dayjs from 'dayjs';

interface IInputFilter {
    label?: string,
    onChange?: (date: string | string[]) => void 
}

export const InputFilter: FC<IInputFilter> = ({ label, onChange }) => {

    const onChangeHandler = (_: dayjs.Dayjs, dateString: string | string[]) => {
        onChange?.(dateString)
    }

    return (
        <div className={styles.filter}>
            <label>{label}</label>
            <Datepicker className={styles.input} onChange={onChangeHandler}></Datepicker>
        </div>
    );
};