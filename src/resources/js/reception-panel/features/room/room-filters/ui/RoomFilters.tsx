import { $isLoading, searchStarted } from '../model/store';
import { ChangeEvent, FC } from 'react';
import { Button } from '@/shared/ui/button';
import { useUnit } from 'effector-react';
import { roomFilterModel, roomModel } from '@/entity/room';
import styles from './RoomFilters.module.css';
import { DateInput } from '@/shared/ui/date-input';
import { Select } from '@/shared/ui/select';

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
                    <DateInput
                        value={checkIn}
                        label='Дата заезда'
                        onChange={(date) => roomFilterModel.setCheckIn(date as string)}
                        required
                    />
                    <DateInput
                        value={checkOut}
                        label='Дата выезда'
                        onChange={(date) => roomFilterModel.setCheckOut(date as string)}
                        required
                    />
                </>
            }
            <Select
                placeholder='Вместительность'
                options={capacity}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => roomFilterModel.setCapacity(e.target.value)} />
            <Select
                placeholder='Уровень комфорта'
                options={comfortLevel}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => roomFilterModel.setComfortLevel(e.target.value)}
            />
            <Button
                className={styles.searchButton}
                loading={isLoading}
                type="submit"
                onSubmit={(e) => {
                    e.preventDefault();
                    searchStarted();
                }}
            >
                Поиск номеров
            </Button>
        </form>
    );
}