import { AddStayingDTO, StayingDTO } from '@/shared/api/types';
import { AddStaying, Staying } from '../model/types';
import { mapRoom } from '@/entity/room/lib/mapRoom';
import { mapClient } from '@/entity/client/lib/mapClient';

export const mapStaying = (staying: StayingDTO): Staying => {
    return {
        id: staying.id,
        note: staying.note,
        roomId: staying.roomId,
        clientId: staying.clientId,
        room: staying.room ? mapRoom(staying.room) : undefined,
        client: staying.client ? mapClient(staying.client) : undefined,
        checkIn: staying.checkIn,
        checkOut: staying.checkOut
    }
};

export const mapStayingList = (stayings: StayingDTO[]): Staying[] => {
    return stayings.map((staying) => mapStaying(staying));
};

export const mapAddStaying = (staying: AddStaying): AddStayingDTO => {
    return {
        clientId: staying.clientId,
        roomId: staying.roomId,
        note: staying.note
    }
}