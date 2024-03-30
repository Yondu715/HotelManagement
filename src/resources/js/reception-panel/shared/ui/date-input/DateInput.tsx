import { FC, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import styles from './DateInput.module.css';
import { DatePicker } from 'antd';

interface IDateFilter {
    label?: string,
    onChange?: (date: string | string[]) => void,
    value?: string | null,
    required?: boolean
}

export const DateInput: FC<IDateFilter> = ({ label, onChange, value, required }) => {
    const [valueDate, setValueDate] = useState<dayjs.Dayjs | null>(null);

    const onChangeHandler = (_: dayjs.Dayjs, dateString: string | string[]) => {
        onChange?.(dateString)
    }

    useEffect(() => {
        setValueDate(dayjs(value));
    }, [value]);

    return (
        <DatePicker
            minDate={dayjs(new Date())}
            placeholder={label}
            defaultValue={valueDate}
            className={styles.input}
            onChange={onChangeHandler}
            required={required}
        />
    );
};