import { createEffect, createStore, sample } from 'effector';
import { AddBoocking, Booking } from './types';
import { addBoockingQuery, getBookingsQuery } from '@/shared/api';
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
})

sample({
    clock: getBookingsFx.doneData,
    target: $bookings
});