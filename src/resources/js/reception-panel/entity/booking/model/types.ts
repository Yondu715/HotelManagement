import { Client } from '@/reception/entity/client/model/types'
import { Room } from '@/reception/entity/room/model/types'

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

export type AddBoocking = {
    clientId: number,
    roomId: number,
    checkIn: string,
    checkOut: string
}