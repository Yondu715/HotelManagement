import { FC } from 'react';
import { DatePicker as DP, DatePickerProps } from 'antd';
import dayjs from 'dayjs';

export const Datepicker: FC<DatePickerProps> = ({ onChange, className, placeholder = '', ...props }) => {
    return (
        <DP
            onChange={onChange}
            placeholder={placeholder}
            className={className}
            required
            minDate={dayjs(new Date())}
            {...props}
        />
    );
};