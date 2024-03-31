import { addClientQuery, getClientsQuery } from '@/reception/shared/api';
import { createEffect, createStore, sample } from 'effector';
import { mapClientList, mapClientToBack } from '../lib/mapClient';
import { AddClient, Client } from './types';

export const getClientsFx = createEffect(async () => {
    const response = await getClientsQuery();
    return mapClientList(response.data);
})

export const addClientFx = createEffect<AddClient, void, string>(async (client: AddClient) => {
    await addClientQuery(mapClientToBack(client));
});

export const $clients = createStore<Client[]>([]);

sample({
    clock: getClientsFx.doneData,
    target: $clients
});