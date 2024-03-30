import { statisticModel } from '@/entity/statistic';
import { attach, createEvent, sample } from 'effector';

const getStatisticFx = attach({
    effect: statisticModel.getStatisticFx
});

export const pageMounted = createEvent();

sample({
    clock: pageMounted,
    target: getStatisticFx
});