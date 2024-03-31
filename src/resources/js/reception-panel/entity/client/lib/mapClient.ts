import { AddClientDTO, ClientDTO, PassportDTO } from '@/reception/shared/api/types';
import { AddClient, Client, Passport } from '../model/types';

export const mapClient = (client: ClientDTO): Client => {
    return {
        id: client.id,
        firstName: client.firstName,
        middleName: client.middleName,
        lastName: client.lastName,
        passport: client.passport ? mapPassport(client.passport) : undefined
    }
};

const mapPassport = (passport: PassportDTO): Passport => {
    return {
        number: passport.number,
        series: passport.series
    }
}

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

