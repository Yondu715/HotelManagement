import { RoomDTO } from '@/shared/api/types';
import { Room } from '../model/types';

export const mapRoom = (room: RoomDTO): Room => {
    return {
        id: room.id,
        name: room.name,
        capacity: room.capacity,
        comfortLevel: room.comfortLevel,
        image: `/${room.image}`,
        price: room.price
    }
};

export const mapRoomList = (rooms: RoomDTO[]): Room[] => {
    return rooms.map((room) => mapRoom(room));
};

