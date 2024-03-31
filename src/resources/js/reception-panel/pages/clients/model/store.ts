import { clientModel } from '@/reception/entity/client';
import { attach, createEvent, sample } from 'effector';

const getClientsFx = attach({
    effect: clientModel.getClientsFx
});

export const pageMounted = createEvent();

sample({
    clock: pageMounted,
    target: getClientsFx
});