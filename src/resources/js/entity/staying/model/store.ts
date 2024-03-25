import { createEffect, createStore, sample } from 'effector';
import { AddStaying, Staying } from './types';
import { addStayingQuery, getStayingsQuery } from '@/shared/api';
import { mapAddStaying, mapStayingList } from '../lib/mapStaying';

export const getStayingsFx = createEffect(async () => {
    const response = await getStayingsQuery();
    console.log(mapStayingList(response));
    return mapStayingList(response);
});

export const addStayingFx = createEffect(async (data: AddStaying) => {
    await addStayingQuery(mapAddStaying(data));
});

export const $stayings = createStore<Staying[]>([]);

sample({
    clock: getStayingsFx.doneData,
    target: $stayings
});
