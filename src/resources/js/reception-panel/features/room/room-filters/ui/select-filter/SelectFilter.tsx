import { ChangeEvent, FC } from 'react';
import styles from './SelectFilter.module.css';

type Option = {
    key: string,
    value: string
}

interface ISelectFilter {
    placeholder?: string,
    options?: string[] | number[],
    optionsN?: Option[],
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const SelectFilter: FC<ISelectFilter> = ({ placeholder, options, onChange }) => {
    return (
        <div>
            <select defaultValue={''} className={styles.filter} onChange={onChange}>
                {
                    placeholder &&
                    <option value={''} disabled>{placeholder}</option>
                }
                {
                    options?.map((option, idx) =>
                        <option key={idx} value={option}>
                            {option}
                        </option>
                    )
                }
            </select>
        </div>
    );
};