import { FC, useEffect, useState } from 'react';
import { Datepicker } from '@/shared/ui/datepicker';
import dayjs from 'dayjs';
import styles from './DateFilter.module.css';

interface IDateFilter {
    label?: string,
    onChange?: (date: string | string[]) => void,
    required?: boolean,
    value?: string | null
}

export const DateFilter: FC<IDateFilter> = ({ label, onChange, required = false, value }) => {
    const [valueDate, setValueDate] = useState<dayjs.Dayjs | null>(null);

    const onChangeHandler = (_: dayjs.Dayjs, dateString: string | string[]) => {
        onChange?.(dateString)
    }

    useEffect(() => {
        setValueDate(dayjs(value));
    }, [value]);

    return (
        <div className={styles.filter}>
            <label>{label}</label>
            <Datepicker
                defaultValue={valueDate}
                className={styles.input}
                required={required}
                onChange={onChangeHandler}
            />
        </div>
    );
};