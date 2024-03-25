import { createEvent, createStore } from 'effector';

export const $checkInDate = createStore<string | null>(null);
export const $checkOutDate = createStore<string | null>(null);
export const $capacity = createStore<string | null>(null);
export const $comfortLevel = createStore<string | null>(null);

export const setCapacity = createEvent<string>();
export const setComfortLevel = createEvent<string>();
export const setCheckIn = createEvent<string>();
export const setCheckOut = createEvent<string>();