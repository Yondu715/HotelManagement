import { bookingModel } from '@/entity/booking';
import { attach, createEvent, createStore, sample } from 'effector';

const getBookingsFx = attach({
    effect: bookingModel.getBookingsFx
});

export const pageMounted = createEvent();

export const addButtonClicked = createEvent();
export const $addStayingShow = createStore(false);

sample({
    clock: addButtonClicked,
    source: {
        addStayingShow: $addStayingShow
    },
    fn: ({ addStayingShow }) => !addStayingShow,
    target: $addStayingShow
});

sample({
    clock: pageMounted,
    target: getBookingsFx
});