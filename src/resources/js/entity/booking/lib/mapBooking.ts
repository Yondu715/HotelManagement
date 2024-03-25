import { mapRoom } from '@/entity/room/lib/mapRoom';
import { mapClient } from '@/entity/client/lib/mapClient';
import { BookingDTO } from '@/shared/api/types';
import { Booking } from '../model/types';

export const mapBooking = (booking: BookingDTO): Booking => {
    return {
        id: booking.id,
        roomId: booking.roomId,
        clientId: booking.clientId,
        room: booking.room ? mapRoom(booking.room) : undefined,
        client: booking.client ? mapClient(booking.client) : undefined,
        checkIn: booking.checkIn,
        checkOut: booking.checkOut,
        price: booking.price
    }
};

export const mapBookingList = (bookings: BookingDTO[]): Booking[] => {
    return bookings.map((booking) => mapBooking(booking));
};