import { Client } from '@/reception/entity/client/model/types'
import { Room } from '@/reception/entity/room/model/types'

export type Staying = {
    id: number,
    note: string,
    clientId: number,
    roomId: number,
    price?: number,
    room?: Room,
    client?: Client,
    checkIn: string,
    checkOut?: string
}

export type AddStaying = {
    roomId: number,
    clientId: number,
    note: string
}