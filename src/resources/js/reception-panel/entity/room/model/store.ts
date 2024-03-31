import { getAvailableRoomsQuery } from '@/reception/shared/api';
import { createEffect, createEvent, createStore, sample } from 'effector';
import { GetRoomsParams, OrderRoomType, Room } from './types';
import { mapRoomList } from '../lib/mapRoom';
import { reset } from 'patronum';

export const getStayingRoomsFx = createEffect(async (filters?: GetRoomsParams) => {
    const rooms = await getAvailableRoomsQuery(filters);
    return mapRoomList(rooms.data);
});

export const $type = createStore<OrderRoomType>(OrderRoomType.STAY);

export const $rooms = createStore<Room[]>([]);

export const $selectedRoomId = createStore<number | null>(null);

export const setSelectedRoomId = createEvent<number>();
export const setType = createEvent<OrderRoomType>();

sample({
    clock: getStayingRoomsFx.doneData,
    target: $rooms
});

sample({
    clock: setType,
    target: $type
});

reset({
    clock: $type,
    target: $rooms
});

sample({
    clock: setSelectedRoomId,
    target: $selectedRoomId
});