export type ResponseWrap<T> = {
    data: T
};

export type ApiException = {
    message: string
}

export type UserDto = {
    email: string,
    name: string
}

export type AuthInfoDto = {
    token: string,
    user: UserDto
}

export type StayingDTO = {
    id: number,
    clientId: number,
    roomId: number,
    room?: RoomDTO,
    client?: ClientDTO
    note: string,
    price?: number,
    checkIn: string,
    checkOut?: string
}

export type BookingDTO = {
    id: number,
    clientId: number,
    roomId: number,
    room?: RoomDTO,
    client?: ClientDTO
    checkIn: string,
    checkOut: string,
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
    passport?: {
        number: number,
        series: number
    }
}

export type PassportDTO = {
    number: number,
    series: number
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
    comfortLevel?: string | null,
    checkIn?: string | null,
    checkOut?: string | null
}

export type TokenDto = {
    token: string
}

export type AddStayingDTO = {
    clientId: number,
    roomId: number,
    note: string
}

export type AddBoockingDTO = {
    checkIn: string,
    checkOut: string,
    clientId: number,
    roomId: number
}

export type MonthlyPriceStatistic = {
    month: string,
    price: number
}

export type StatisticDTO = {
    clientsCount: number,
    bookingStatistic: MonthlyPriceStatistic[],
    stayingStatistic: MonthlyPriceStatistic[]
}