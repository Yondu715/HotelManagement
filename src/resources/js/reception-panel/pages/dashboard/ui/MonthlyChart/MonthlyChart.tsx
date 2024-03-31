import { MonthlyPriceStatistic } from '@/reception/entity/statistic/model/types';
import { Chart } from '@/reception/shared/ui/chart';
import { FC } from 'react';
import styles from './MonthlyChart.module.css';

interface IMonthlyChart {
    statistic: MonthlyPriceStatistic[],
    label?: string
}

export const MonthlyChart: FC<IMonthlyChart> = ({ statistic, label }) => {

    return (
        <div className={styles.chart}>
            <div>
                {label}
            </div>
            <Chart data={statistic} />
        </div>
    )
};