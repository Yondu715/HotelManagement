export type Client = {
    id: number,
    firstName: string,
    middleName: string,
    lastName: string,
    passport: {
        number: number,
        series: number
    }
}

export type AddClient = {
    firstName: string,
    middleName: string,
    lastName: string,
    comment: string,
    number: string,
    series: string
}