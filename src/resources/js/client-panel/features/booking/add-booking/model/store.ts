import { createEvent, createStore } from 'effector';

export const formSubmitted = createEvent();

export const $firstName = createStore('');
export const $lastName = createStore('');
export const $middleName = createStore('');
export const $series = createStore('');
export const $number = createStore('');
export const $roomId = createStore<number | null>(null);

