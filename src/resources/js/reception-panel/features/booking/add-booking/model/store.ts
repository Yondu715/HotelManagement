import { bookingModel } from '@/reception/entity/booking';
import { roomFilterModel, roomModel } from '@/reception/entity/room';
import { attach, combine, createEvent, createStore, sample } from 'effector';

export const $clientId = createStore<number | null>(null);

export const setClientId = createEvent<number>();

export const formSubmitted = createEvent();

const addBoockingFx = attach({
    effect: bookingModel.addBoockingFx
});

const $addBoockingData = combine(
    roomModel.$selectedRoomId, $clientId, roomFilterModel.$checkInDate, roomFilterModel.$checkOutDate,
    (roomId, clientId, checkIn, checkOut) => {
        return {
            roomId: roomId ?? -1,
            clientId: clientId ?? -1,
            checkIn: checkIn ?? '',
            checkOut: checkOut ?? ''
    }
    });

sample({
    clock: formSubmitted,
    source: {
        data: $addBoockingData
    },
    fn: ({ data }) => data,
    target: addBoockingFx
});

sample({
    clock: setClientId,
    target: $clientId
});