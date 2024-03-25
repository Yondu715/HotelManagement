import { loginQuery } from '@/shared/api';
import { createEffect, createStore, sample } from 'effector';
import { LoginParams } from './types';

export const $isAuth = createStore(false);

export const loginFx = createEffect<LoginParams, void, string>(async (params: LoginParams) => {
    await loginQuery(params.email, params.password);
});

sample({
    clock: loginFx.done,
    fn: () => true,
    target: $isAuth
})