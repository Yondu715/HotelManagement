import { bookingModel } from '@/client/entity/booking';
import { roomFilterModel } from '@/client/entity/room';
import { attach, createEvent, createStore, sample } from 'effector';
import { AddBookingData, AddBookingDataDefined } from './types';

const addClientBookingFx = attach({
    effect: bookingModel.AddClientBoockingFx
});

export const $firstName = createStore('');
export const $lastName = createStore('');
export const $middleName = createStore('');
export const $passportSeries = createStore('');
export const $passportNumber = createStore('');
export const $roomId = createStore<number | null>(null);


export const setFirstName = createEvent<string>();
export const setLastName = createEvent<string>();
export const setMiddleName = createEvent<string>();
export const setPassportSeries = createEvent<string>();
export const setPassportNumber = createEvent<string>();
export const setRoomId = createEvent<number>();
export const formSubmitted = createEvent();

sample({
    clock: setFirstName,
    target: $firstName
});

sample({
    clock: setLastName,
    target: $lastName
});

sample({
    clock: setMiddleName,
    target: $middleName
});

sample({
    clock: setPassportNumber,
    target: $passportNumber
});

sample({
    clock: setPassportSeries,
    target: $passportSeries
});

sample({
    clock: setRoomId,
    target: $roomId
});

sample({
    clock: formSubmitted,
    source: {
        firstName: $firstName,
        lastName: $lastName,
        middleName: $middleName,
        passportNumber: $passportNumber,
        passportSeries: $passportSeries,
        roomId: $roomId,
        checkIn: roomFilterModel.$checkInDate,
        checkOut: roomFilterModel.$checkOutDate,
    },
    filter: (source: AddBookingData): source is AddBookingDataDefined => Boolean(source),
    target: addClientBookingFx
})
