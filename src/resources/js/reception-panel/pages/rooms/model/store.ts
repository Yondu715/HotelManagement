import { roomModel } from '@/reception/entity/room';
import { createEvent } from 'effector';
import { reset } from 'patronum';

export const pageMounted = createEvent();
export const pageUnmounted = createEvent();

reset({
    clock: pageUnmounted,
    target: roomModel.$rooms
});