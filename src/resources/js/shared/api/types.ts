export type ResponseWrap<T> = {
    data: T
};

export type ApiException = {
    message: string
}

export type StayingDTO = {
    id: number,
    client_id: number,
    room_id: number,
    room: RoomDTO,
    client: ClientDTO
    note: string,
    check_in: string,
    check_out?: string 
}

export type BookingDTO = {
    id: number,
    client_id: number,
    room_id: number,
    room: RoomDTO,
    client: ClientDTO
    check_in: string,
    check_out: string,
    price: number
}

export type RoomDTO = {
    id: number,
    name: string,
    capacity: number,
    comfortLevel: string,
    image: string,
    price: number
}

export type ClientDTO = {
    id: number,
    firstName: string,
    middleName: string,
    lastName: string,
    passport: {
        number: number,
        series: number
    }
}

export type AddClientDTO = {
    firstName: string,
    middleName: string,
    lastName: string,
    number: string,
    series: string
    comment: string
}

export type GetRoomsParams = {
    capacity?: string | null,
    comfortLevel?: string | null
}

export type TokenDto = {
    token: string
}

export type AddStayingDTO = {
    clientId: number,
    roomId: number,
    note: string
}