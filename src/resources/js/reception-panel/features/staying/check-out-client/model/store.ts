import { stayingModel } from '@/entity/staying';
import { checkOutClientQuery } from '@/shared/api';
import { createEffect, createEvent, sample } from 'effector';

const checkOutClientFx = createEffect(async (stayingId: number) => {
    await checkOutClientQuery(stayingId);
});

export const checkOutClicked = createEvent<number>();

sample({
    clock: checkOutClicked,
    target: checkOutClientFx
});

sample({
    clock: checkOutClientFx.done,
    target: stayingModel.getStayingsFx
});