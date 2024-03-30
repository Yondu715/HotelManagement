import { DateFilter } from './date-filter/DateFilter';
import { SelectFilter } from './select-filter/SelectFilter';
import { $isLoading, searchStarted } from '../model/store';
import { ChangeEvent, FC } from 'react';
import { Button } from '@/shared/ui/button';
import { useUnit } from 'effector-react';
import { roomFilterModel, roomModel } from '@/entity/room';
import styles from './RoomFilters.module.css';

export const RoomFilters: FC = () => {
    const {
        isLoading,
        type,
        checkIn,
        checkOut
    } = useUnit({
        isLoading: $isLoading,
        type: roomModel.$type,
        checkIn: roomFilterModel.$checkInDate,
        checkOut: roomFilterModel.$checkOutDate
    });

    return (
        <form className={styles.filtersContainer}>
            {
                type === 'book' &&
                <>
                    <DateFilter
                        value={checkIn}
                        label='Дата заезда'
                        onChange={(date) => roomFilterModel.setCheckIn(date as string)}
                    />
                    <DateFilter
                        value={checkOut}
                        label='Дата выезда'
                        onChange={(date) => roomFilterModel.setCheckOut(date as string)}
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
                onClick={() => searchStarted()}
            >
                Поиск номеров
            </Button>
        </form>
    );
}