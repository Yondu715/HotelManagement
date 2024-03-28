import { createEffect, createStore, sample } from 'effector';
import { AddBoocking, Booking } from './types';
import { addBoockingQuery, deleteBookingQuery, getBookingsQuery } from '@/shared/api';
import { mapBookingList, mapToBack } from '../lib/mapBooking';

export const $bookings = createStore<Booking[]>([]);

export const getBookingsFx = createEffect(async () => {
    const response = await getBookingsQuery();
    return mapBookingList(response.data);
});

export const addBoockingFx = createEffect(async (addBoocking: AddBoocking) => {
    await addBoockingQuery(
        mapToBack(addBoocking)
    );
});

export const deleteBookingFx = createEffect(async (bookingId: number) => {
    await deleteBookingQuery(bookingId);
})

sample({
    clock: getBookingsFx.doneData,
    target: $bookings
});