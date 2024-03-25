
import { Title } from '@/shared/ui/title';
import styles from './Dashboard.module.css';
import { useEffect } from 'react';
import { pageMounted } from '../model/store';
import { useUnit } from 'effector-react';
import { statisticModel } from '@/entity/statistic';
import { CountClients } from './CountClients/CountClients';
import { MonthlyChart } from './MonthlyChart/MonthlyChart';

export const DashboardPage = () => {
    const statistic = useUnit(statisticModel.$statistic);

    console.log(statistic);
    useEffect(() => {
        pageMounted();
    }, []);

    return (
        <div className={styles.page}>
            <div className={styles.titleContainer}>
                <Title text='Главная' />
            </div>
            <div className={styles.dataContainer}>
                <CountClients count={statistic?.clientsCount ?? 0} />
                {
                    statistic?.bookingStatistic &&
                    <MonthlyChart
                        statistic={statistic.bookingStatistic}
                        label="Статистика по бронированиям"
                    />
                }
                {
                    statistic?.stayingStatistic &&
                    <MonthlyChart
                        statistic={statistic.stayingStatistic}
                        label="Статистика по заселениям"

                    />
                }
            </div>
        </div>
    );
};