import { InputFilter } from './input-filter/InputFilter';
import { SelectFilter } from './select-filter/SelectFilter';
import { $isLoading, searchStarted } from '../model/store';
import { ChangeEvent, FC } from 'react';
import { Button } from '@/shared/ui/button';
import styles from './RoomFilters.module.css';
import { useUnit } from 'effector-react';
import { roomFilterModel, roomModel } from '@/entity/room';

export const RoomFilters: FC = () => {
    const {
        isLoading,
        type
    } = useUnit({
        isLoading: $isLoading,
        type: roomModel.$type
    })
    return (
        <form className={styles.filtersContainer}>
            {
                type === 'book' &&
                <>
                    <InputFilter
                        label='Дата заезда'
                        required
                        onChange={(date) => roomFilterModel.setCheckIn(date as string)}
                    />
                    <InputFilter
                        label='Дата выезда'
                        required onChange={(date) => roomFilterModel.setCheckOut(date as string)}
                    />
                </>
            }
            <SelectFilter
                placeholder='Вместительность'
                options={[1, 2, 3, 4]}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => roomFilterModel.setCapacity(e.target.value)} />
            <SelectFilter
                placeholder='Уровень комфорта'
                options={['Luxury', 'Semi-Luxury', 'Standart']}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => roomFilterModel.setComfortLevel(e.target.value)}
            />
            <Button
                className={styles.searchButton}
                loading={isLoading}
                text='Поиск номеров'
                onClick={() => searchStarted()}
            />
        </form>
    );
}