import { Button } from '@/shared/ui/button';
import { FC, useEffect, useState } from 'react';
import { bookingDeleted } from '../model/store';
import { checkDeleteAvailable } from '../lib/checkDelete';
import styles from './DeleteBooking.module.css';

interface IDeleteBooking {
    bookingId: number,
    checkIn: string
}

export const DeleteBooking: FC<IDeleteBooking> = ({ bookingId, checkIn }) => {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        setIsShow(checkDeleteAvailable(checkIn));
    }, []);


    return (
        isShow &&
        <Button className={styles.deleteBtn} onClick={() => bookingDeleted(bookingId)}>
            Отменить
        </Button>
    );
};