import { sessionModel } from '@/client/entity/session';
import { routes } from '@/client/shared/routing';
import { $navigate } from '@/client/shared/routing/routes';
import { attach, createEvent, createStore, sample } from 'effector';
import { reset } from 'patronum';

export const $email = createStore('');
export const $password = createStore('');
export const $error = createStore('');

const loginFx = attach({
    effect: sessionModel.loginFx,
    source: {
        email: $email,
        password: $password
    },
});

export const $isLoading = loginFx.pending;

export const setEmail = createEvent<string>();
export const setPassword = createEvent<string>();
export const formSubmited = createEvent();

sample({
    clock: setEmail,
    target: $email
});

sample({
    clock: setPassword,
    target: $password
});

sample({
    clock: formSubmited,
    target: loginFx
});

sample({
    clock: loginFx.done,
    source: {
        navigate: $navigate
    },
    fn: ({ navigate }) => {
        navigate?.(routes.rooms);
    }
});

sample({
    clock: loginFx.fail,
    fn: (error) => error.error,
    target: $error
});

reset({
    clock: formSubmited,
    target: $error
});


