import { Client } from '@/entity/client/model/types'
import { Room } from '@/entity/room/model/types'

export type Staying = {
    id: number,
    note: string,
    clientId: number,
    roomId: number,
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