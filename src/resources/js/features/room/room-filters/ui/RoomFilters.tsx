import { InputFilter } from './input-filter/InputFilter';
import { SelectFilter } from './select-filter/SelectFilter';
import { $isLoading, searchStarted, setCapacity, setCheckIn, setCheckOut, setComfortLevel } from '../model/store';
import { ChangeEvent, FC } from 'react';
import { Button } from '@/shared/ui/button';
import styles from './RoomFilters.module.css';
import { useUnit } from 'effector-react';
import { roomModel } from '@/entity/room';

export const RoomFilters: FC = () => {
    const {
        isLoading,
        type
    } = useUnit({
        isLoading: $isLoading,
        type: roomModel.$type
    })
    return (
        <div className={styles.filtersContainer}>
            {
                type === 'book' &&
                <>
                    <InputFilter label='Дата заезда' onChange={(date) => setCheckIn(date as string)} />
                    <InputFilter label='Дата выезда' onChange={(date) => setCheckOut(date as string)} />
                </>
            }
            <SelectFilter
                placeholder='Вместительность'
                options={[1, 2, 3, 4]}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setCapacity(e.target.value)} />
            <SelectFilter
                placeholder='Уровень комфорта'
                options={['Luxury', 'Semi-Luxury', 'Standart']}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setComfortLevel(e.target.value)}
            />
            <Button className={styles.searchButton} loading={isLoading} text='Поиск номеров' onClick={() => searchStarted()} />
        </div>
    );
}