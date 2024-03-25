import { roomModel } from '@/entity/room';
import { stayingModel } from '@/entity/staying';
import { attach, combine, createEvent, createStore, sample } from 'effector';

export const $note = createStore('');
export const $clientId = createStore<number | null>(null);

export const setNote = createEvent<string>();
export const setClientId = createEvent<number>();

export const formSubmitted = createEvent();

const addStayingFx = attach({
    effect: stayingModel.addStayingFx
});

const $addStayingData = combine(roomModel.$selectedRoomId, $clientId, $note, (roomId, clientId, note) => {
    return {
        roomId: roomId ?? -1,
        clientId: clientId ?? -1,
        note
    }
});

sample({
    clock: formSubmitted,
    source: {
        data: $addStayingData
    },
    fn: ({ data }) => data,
    target: addStayingFx
});

sample({
    clock: setNote,
    target: $note
});

sample({
    clock: setClientId,
    target: $clientId
});