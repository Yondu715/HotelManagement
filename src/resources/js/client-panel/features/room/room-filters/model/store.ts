import { roomFilterModel, roomModel } from '@/entity/room';
import { attach, createEvent, sample } from 'effector';

const getStayingRoomsFx = attach({
    effect: roomModel.getStayingRoomsFx
});

export const searchStarted = createEvent();

sample({
    clock: searchStarted,
    source: {
        capacity: roomFilterModel.$capacity,
        comfortLevel: roomFilterModel.$comfortLevel,
        checkIn: roomFilterModel.$checkInDate,
        checkOut: roomFilterModel.$checkOutDate,
        roomOrderType: roomModel.$type
    },
    fn: ({ capacity, comfortLevel, checkIn, checkOut }) => ({
        capacity,
        comfortLevel,
        checkIn,
        checkOut
    }),
    target: getStayingRoomsFx
});

export const $isLoading = getStayingRoomsFx.pending;