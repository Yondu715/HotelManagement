import { getStayingRoomsQuery } from '@/shared/api';
import { createEffect, createEvent, createStore, sample } from 'effector';
import { OrderRoomType, Room } from './types';
import { mapRoomList } from '../lib/mapRoom';

export const getStayingRoomsFx = createEffect(async (filters?: {
    capacity?: string | null,
    comfortLevel?: string | null
}) => {
    const rooms = await getStayingRoomsQuery(filters);
    return mapRoomList(rooms.data);
});

export const $type = createStore<OrderRoomType>('stay');

export const $rooms = createStore<Room[]>([]);

export const $selectedRoomId = createStore<number | null>(null);

export const setSelectedRoomId = createEvent<number>();

sample({
    clock: getStayingRoomsFx.doneData,
    target: $rooms
});

export const setType = createEvent<OrderRoomType>();

sample({
    clock: setType,
    target: $type
});

sample({
    clock: setSelectedRoomId,
    target: $selectedRoomId
});