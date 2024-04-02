import { $isLoading, searchStarted } from '../model/store';
import { FC } from 'react';
import { useUnit } from 'effector-react';
import { roomFilterModel } from '@/client/entity/room';
import { DateInput } from '@/client/shared/ui/date-input';
import { Select } from '@/client/shared/ui/select';
import { Button } from '@/client/shared/ui/button';
import styles from './RoomFilters.module.css';

const capacity = [
    {
        key: 1,
        value: 1
    },
    {
        key: 2,
        value: 2
    },
    {
        key: 3,
        value: 3
    },
    {
        key: 4,
        value: 4
    }
];

const comfortLevel = [
    {
        key: 'Luxury',
        value: 'Luxury'
    },
    {
        key: 'Semi-Luxury',
        value: 'Semi-Luxury'
    },
    {
        key: 'Standart',
        value: 'Standart'
    }
]

export const RoomFilters: FC = () => {
    const {
        isLoading,
        checkIn,
        checkOut,
    } = useUnit({
        isLoading: $isLoading,
        checkIn: roomFilterModel.$checkInDate,
        checkOut: roomFilterModel.$checkOutDate,
    });

    return (
        <form
            className={styles.filtersContainer}
            onSubmit={(e) => {
                e.preventDefault();
                searchStarted();
            }}
        >
            <DateInput
                value={checkIn}
                className={styles.size}
                label='Дата заезда'
                onChange={(date) => roomFilterModel.setCheckIn(date as string)}
                required
            />
            <DateInput
                value={checkOut}
                className={styles.size}
                label='Дата выезда'
                onChange={(date) => roomFilterModel.setCheckOut(date as string)}
                required
            />
            <Select
                placeholder='Вместительность'
                options={capacity}
                className={styles.size}
                onChange={(value) => roomFilterModel.setCapacity(value as string)} />
            <Select
                placeholder='Уровень комфорта'
                options={comfortLevel}
                className={styles.size}
                onChange={(value) => roomFilterModel.setComfortLevel(value as string)}
            />
            <Button
                className={[styles.searchButton, styles.size].join(' ')}
                loading={isLoading}
                type="submit"
            >
                Поиск номеров
            </Button>
        </form>
    );
}