export type Room = {
    id: number,
    name: string,
    capacity: number,
    comfortLevel: string,
    image: string,
    price: number
}

export type GetRoomsParams = {
    capacity?: string | null,
    comfortLevel?: string | null,
    checkIn?: string | null,
    checkOut?: string | null
}

export enum OrderRoomType {
    STAY = 'stay',
    BOOK = 'book'
}