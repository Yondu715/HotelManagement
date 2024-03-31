import { Title } from '@/reception/shared/ui/title';
import { useUnit } from 'effector-react';
import { FC, useEffect } from 'react';
import { pageMounted } from '../model/store';
import { bookingModel } from '@/reception/entity/booking';
import { Empty } from '@/reception/shared/ui/empty';
import { DeleteBooking } from '@/reception/features/booking/delete-booking';
import styles from './Bookings.module.css';

export const BookingsPage: FC = () => {
    const bookings = useUnit(bookingModel.$bookings);

    useEffect(() => {
        pageMounted();
    }, []);

    return (
        <div className={styles.page}>
            <div className={styles.titleContainer}>
                <Title text='Бронирования' />
            </div>
            <div className={styles.dataContainer}>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>ID Комнаты</th>
                            <th>ID Клиента</th>
                            <th>Дата заезда</th>
                            <th>Дата выезда</th>
                            <th>Цена</th>
                            <th>Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking) =>
                                <tr key={booking.id}>
                                    <td>{booking.id}</td>
                                    <td>{booking.roomId}</td>
                                    <td>{booking.clientId}</td>
                                    <td>{booking.checkIn}</td>
                                    <td>{booking.checkOut}</td>
                                    <td>{booking.price}</td>
                                    <td>{<DeleteBooking bookingId={booking.id} checkIn={booking.checkIn} />}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                {
                    bookings.length === 0 &&
                    <Empty />
                }
            </div>
        </div>
    );
};