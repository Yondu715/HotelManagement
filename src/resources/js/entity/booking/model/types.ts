import { Client } from '@/entity/client/model/types'
import { Room } from '@/entity/room/model/types'

export type Booking = {
    id: number,
    clientId: number,
    roomId: number,
    room?: Room,
    client?: Client
    checkIn: string,
    checkOut: string,
    price: number
}