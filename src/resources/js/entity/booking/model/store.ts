import { createEffect, createStore, sample } from 'effector';
import { Booking } from './types';
import { getBookingsQuery } from '@/shared/api';
import { mapBookingList } from '../lib/mapBooking';

export const $bookings = createStore<Booking[]>([]);

export const getBookingsFx = createEffect(async () => {
    const response = await getBookingsQuery();
    return mapBookingList(response.data);
});

sample({
    clock: getBookingsFx.doneData,
    target: $bookings
});