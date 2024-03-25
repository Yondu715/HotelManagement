import { AddClientDTO, ClientDTO } from '@/shared/api/types';
import { AddClient, Client } from '../model/types';

export const mapClient = (client: ClientDTO): Client => {
    return {
        id: client.id,
        firstName: client.firstName,
        middleName: client.middleName,
        lastName: client.lastName,
        passport: {
            number: client.passport?.number,
            series: client.passport?.series
        }
    }
};

export const mapClientList = (rooms: ClientDTO[]): Client[] => {
    return rooms.map((room) => mapClient(room));
};

export const mapClientToBack = (client: AddClient): AddClientDTO => {
    return {
        firstName: client.firstName,
        middleName: client.middleName,
        lastName: client.lastName,
        number: client.number,
        series: client.series,
        comment: client.comment
    }
}

