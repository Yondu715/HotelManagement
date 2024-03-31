export type NonNullableObject<T> = {
    [K in keyof T]: NonNullable<T[K]>
}

export type AddBookingData = {
    firstName: string;
    lastName: string;
    middleName: string;
    passportNumber: string;
    passportSeries: string;
    roomId: number | null;
    checkIn: string | null;
    checkOut: string | null;
}

export type AddBookingDataDefined = NonNullableObject<AddBookingData>