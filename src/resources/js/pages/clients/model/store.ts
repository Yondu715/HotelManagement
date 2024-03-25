import { clientModel } from '@/entity/client';
import { attach, createEvent, createStore, sample } from 'effector';

export const getClientsFx = attach({
    effect: clientModel.getClientsFx
});

export const $addClientShow = createStore(false);
export const pageMounted = createEvent();

sample({
    clock: pageMounted,
    target: getClientsFx
});