import { bookingModel } from '@/reception/entity/booking';
import { attach, createEvent, sample } from 'effector';

export const deleteBookingFx = attach({
    effect: bookingModel.deleteBookingFx
});

export const bookingDeleted = createEvent<number>();

sample({
    clock: bookingDeleted,
    target: deleteBookingFx
});