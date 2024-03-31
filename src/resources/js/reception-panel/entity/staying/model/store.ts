import { createEffect, createStore, sample } from 'effector';
import { AddStaying, Staying } from './types';
import { addStayingQuery, getStayingsQuery } from '@/reception/shared/api';
import { mapAddStaying, mapStayingList } from '../lib/mapStaying';

export const getStayingsFx = createEffect(async () => {
    const response = await getStayingsQuery();
    return mapStayingList(response.data);
});

export const addStayingFx = createEffect(async (data: AddStaying) => {
    await addStayingQuery(mapAddStaying(data));
});

export const $stayings = createStore<Staying[]>([]);

sample({
    clock: getStayingsFx.doneData,
    target: $stayings
});
