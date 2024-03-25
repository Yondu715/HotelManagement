import { stayingModel } from '@/entity/staying';
import { Title } from '@/shared/ui/title';
import { useUnit } from 'effector-react';
import { FC, useEffect } from 'react';
import { pageMounted } from '../model/store';
import styles from './Stayings.module.css';
import { checkOutModel } from '@/features/staying/check-out-client';
import { Button } from '@/shared/ui/button';
import { Empty } from '@/shared/ui/empty';

export const StayingsPage: FC = () => {
    const stayings = useUnit(stayingModel.$stayings);

    useEffect(() => {
        pageMounted();
    }, []);

    return (
        <div className={styles.page}>
            <div className={styles.titleContainer}>
                <Title text='Поселения' />
            </div>
            <div className={styles.dataContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>ID Комнаты</th>
                            <th>ID Клиента</th>
                            <th>Дата заезда</th>
                            <th>Дата выезда</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stayings.map((staying) =>
                                <tr key={staying.id}>
                                    <td>{staying.id}</td>
                                    <td>{staying.roomId}</td>
                                    <td>{staying.clientId}</td>
                                    <td>{staying.checkIn}</td>
                                    <td>{staying.checkOut ?? '-'}</td>
                                    <td>{
                                        staying.checkOut ? '' :
                                            <Button text='Выселить'  onClick={() => checkOutModel.checkOutClicked(staying.id)} />}
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                {
                    stayings.length === 0 &&
                    <Empty />
                }
            </div>
        </div>
    );
};