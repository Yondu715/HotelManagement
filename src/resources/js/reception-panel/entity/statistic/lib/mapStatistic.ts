import { StatisticDTO } from '@/shared/api/types';
import { Statistic } from '../model/types';

export const mapStatistic = (statistic: StatisticDTO): Statistic => {
    return {
        clientsCount: statistic.clientsCount,
        bookingStatistic: statistic.bookingStatistic,
        stayingStatistic: statistic.stayingStatistic
    }
};