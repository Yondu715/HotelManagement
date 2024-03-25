import { createEvent, createStore, sample } from 'effector';

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