import { createEvent, createStore, sample } from 'effector';

export const $checkInDate = createStore<string | null>(null);
export const $checkOutDate = createStore<string | null>(null);
export const $capacity = createStore<string | null>(null);
export const $comfortLevel = createStore<string | null>(null);

export const setCapacity = createEvent<string>();
export const setComfortLevel = createEvent<string>();
export const setCheckIn = createEvent<string>();
export const setCheckOut = createEvent<string>();

sample({
    clock: setCheckIn,
    target: $checkInDate
});

sample({
    clock: setCheckOut,
    target: $checkOutDate
});

sample({
    clock: setCapacity,
    target: $capacity
});

sample({
    clock: setComfortLevel,
    target: $comfortLevel
});