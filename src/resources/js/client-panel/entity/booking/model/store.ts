import { addBoockingQuery } from '@/client/shared/api';
import { createEffect } from 'effector';

export const AddClientBoockingFx = createEffect(async (params: unknown) => {
    addBoockingQuery(params);
});