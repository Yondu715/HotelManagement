import { mapRoom } from '@/entity/room/lib/mapRoom';
import { mapClient } from '@/entity/client/lib/mapClient';
import { BookingDTO } from '@/shared/api/types';
import { Booking } from '../model/types';

export const mapBooking = (booking: BookingDTO): Booking => {
    return {
        id: booking.id,
        roomId: booking.room_id,
        clientId: booking.client_id,
        room: mapRoom(booking.room),
        client: mapClient(booking.client),
        checkIn: booking.check_in,
        checkOut: booking.check_out,
        price: booking.price
    }
};

export const mapBookingList = (bookings: BookingDTO[]): Booking[] => {
    return bookings.map((booking) => mapBooking(booking));
};