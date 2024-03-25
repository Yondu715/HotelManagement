import { Statistic } from 'antd';
import { FC } from 'react';
import styles from './CountClients.module.css';

interface ICountClients {
    count: number
}

export const CountClients: FC<ICountClients> = ({ count }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>
                Количество клиентов
            </div>
            <Statistic value={count} />
        </div>
    );
};