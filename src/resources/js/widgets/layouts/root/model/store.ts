import { bookingModel } from '@/entity/booking';
import { clientModel } from '@/entity/client';
import { stayingModel } from '@/entity/staying';
import { attach, createEvent, sample } from 'effector';

export const getClientsFx = attach({
    effect: clientModel.getClientsFx
});

export const getBookingsFx = attach({
    effect: bookingModel.getBookingsFx
});

export const getStayingsFx = attach({
    effect: stayingModel.getStayingsFx
});

export const layoutMounted = createEvent();

sample({
    clock: layoutMounted,
    target: [
        getBookingsFx,
        getClientsFx,
        getStayingsFx
    ]
})