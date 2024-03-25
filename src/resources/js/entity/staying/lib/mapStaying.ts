import { AddStayingDTO, StayingDTO } from '@/shared/api/types';
import { AddStaying, Staying } from '../model/types';
import { mapRoom } from '@/entity/room/lib/mapRoom';
import { mapClient } from '@/entity/client/lib/mapClient';

export const mapStaying = (staying: StayingDTO): Staying => {
    return {
        id: staying.id,
        note: staying.note,
        roomId: staying.room_id,
        clientId: staying.client_id,
        room: mapRoom(staying.room),
        client: mapClient(staying.client),
        checkIn: staying.check_in,
        checkOut: staying.check_out
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