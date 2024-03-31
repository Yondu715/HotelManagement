import { stayingModel } from '@/reception/entity/staying';
import { attach, createEvent, createStore, sample } from 'effector';

const getStayingsFx = attach({
    effect: stayingModel.getStayingsFx
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
    target: getStayingsFx
});
