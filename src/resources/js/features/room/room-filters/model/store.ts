import { roomModel } from '@/entity/room';
import { attach, createEvent, createStore, sample } from 'effector';

const getStayingRoomsFx = attach({
    effect: roomModel.getStayingRoomsFx
});

export const $checkInDate = createStore<string | null>(null);
export const $checkOutDate = createStore<string | null>(null);
export const $capacity = createStore<string | null>(null);
export const $comfortLevel = createStore<string | null>(null);

export const setCapacity = createEvent<string>();
export const setComfortLevel = createEvent<string>();
export const setCheckIn = createEvent<string>();
export const setCheckOut = createEvent<string>();

export const searchStarted = createEvent();

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

sample({
    clock: searchStarted,
    source: {
        capacity: $capacity,
        comfortLevel: $comfortLevel,
        roomOrderType: roomModel.$type
    },
    filter: ({ roomOrderType }) => roomOrderType === 'stay',
    fn: ({ capacity, comfortLevel }) => ({
        capacity,
        comfortLevel
    }),
    target: getStayingRoomsFx
});

export const $isLoading = getStayingRoomsFx.pending;