export type MonthlyPriceStatistic = {
    month: string,
    price: number
}

export type Statistic = {
    clientsCount: number,
    bookingStatistic: MonthlyPriceStatistic[],
    stayingStatistic: MonthlyPriceStatistic[]
}