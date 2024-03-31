import { loginQuery } from '@/reception/shared/api';
import { createEffect, createStore, sample } from 'effector';
import { LoginParams, Receptionist } from './types';
import { mapUser } from '../lib/mapUser';

export const loginFx = createEffect<LoginParams, Receptionist, string>(async (params: LoginParams) => {
    const response = await loginQuery(params.email, params.password);
    return mapUser(response.user);
});

export const $user = createStore<Receptionist | null>(null);

sample({
    clock: loginFx.doneData,
    target: $user
});

export const $isAuth = $user.map((user) => Boolean(user));