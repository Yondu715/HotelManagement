import { clientModel } from '@/reception/entity/client';
import { attach, combine, createEvent, createStore, sample } from 'effector';
import { reset } from 'patronum';

export const $firstName = createStore('');
export const $middleName = createStore('');
export const $lastName = createStore('');
export const $comment = createStore('');
export const $number = createStore('');
export const $series = createStore('');

export const $error = createStore('');

export const $addClientInfo = combine(
    $firstName,
    $middleName,
    $lastName,
    $comment,
    $number,
    $series,
    (firstName, middleName, lastName, comment, number, series) => {
        return {
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            number: number,
            series: series,
            comment: comment
        }
    });

export const addClientFx = attach({
    effect: clientModel.addClientFx,
    source: $addClientInfo
});

export const $isLoading = addClientFx.pending;

export const setFirstName = createEvent<string>();
export const setMiddleName = createEvent<string>();
export const setLastName = createEvent<string>();
export const setComment = createEvent<string>();
export const setSeries = createEvent<string>();
export const setNumber = createEvent<string>();

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
    clock: setComment,
    target: $comment
});

sample({
    clock: setNumber,
    target: $number
});

sample({
    clock: setSeries,
    target: $series
});

sample({
    clock: formSubmitted,
    target: addClientFx
});

sample({
    clock: addClientFx.fail,
    fn: (error) => error.error,
    target: $error
});

reset({
    clock: formSubmitted,
    target: $error
});
