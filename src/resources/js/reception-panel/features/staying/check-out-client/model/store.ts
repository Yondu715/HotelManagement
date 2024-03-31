import { stayingModel } from '@/reception/entity/staying';
import { checkOutClientQuery } from '@/reception/shared/api';
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