import { createEvent, createStore, sample } from 'effector';
import { NavigateFunction } from 'react-router-dom';

const AUTH = '/auth';

export const routes = {
    root: '/',
    rooms: `/rooms`,
    auth: {
        login: `/${AUTH}/login`,
        register: `/${AUTH}/login`
    },
    stayings: `/stayings`,
    bookings: `/bookings`
}

export const $navigate = createStore<NavigateFunction | null>(null);

export const setNavigate = createEvent<NavigateFunction>();

sample({
    clock: setNavigate,
    target: $navigate
});