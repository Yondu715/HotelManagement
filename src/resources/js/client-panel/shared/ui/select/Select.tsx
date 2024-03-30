import { ChangeEvent, FC } from 'react';
import styles from './Select.module.css';

type Option = {
    key: string,
    value: string
}

interface ISelectFilter {
    active?: string
    placeholder?: string,
    options?: Option[],
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const Select: FC<ISelectFilter> = ({ placeholder, options, onChange, active }) => {
    return (
        <div>
            <select defaultValue={options?.find((option) => option.value === active) ? active : ''} className={styles.filter} onChange={onChange}>
                {
                    placeholder &&
                    <option value={''} disabled>{placeholder}</option>
                }
                {
                    options?.map((option, idx) =>
                        <option key={idx} value={option.key}>
                            {option.value}
                        </option>
                    )
                }
            </select>
        </div>
    );
};