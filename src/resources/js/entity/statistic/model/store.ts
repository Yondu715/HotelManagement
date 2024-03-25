import { createEffect, createStore, sample } from 'effector';
import { Statistic } from './types';
import { getStatisticQuery } from '@/shared/api';
import { mapStatistic } from '../lib/mapStatistic';

export const getStatisticFx = createEffect(async () => {
    const response = await getStatisticQuery();
    return mapStatistic(response.data);
});

export const $statistic = createStore<Statistic | null>(null);

sample({
    clock: getStatisticFx.doneData,
    target: $statistic
});