export type Room = {
    id: number,
    name: string,
    capacity: number,
    comfortLevel: string,
    image: string,
    price: number
}

export type OrderRoomType = 'stay' | 'book'