import { Button } from '@/shared/ui/button';
import { FC, useEffect, useState } from 'react';
import { bookingDeleted } from '../model/store';
import { checkDeleteAvailable } from '../lib/checkDelete';

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
        <Button onClick={() => bookingDeleted(bookingId)}>
            Отменить бронирование
        </Button>
    );
};