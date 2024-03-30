export const checkDeleteAvailable = (checkIn: string) => {
    return new Date() < new Date(checkIn);
}