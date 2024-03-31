import { stayingModel } from '@/reception/entity/staying';
import { Title } from '@/reception/shared/ui/title';
import { useUnit } from 'effector-react';
import { FC, useEffect } from 'react';
import { pageMounted } from '../model/store';
import { checkOutModel } from '@/reception/features/staying/check-out-client';
import { Button } from '@/reception/shared/ui/button';
import { Empty } from '@/reception/shared/ui/empty';
import styles from './Stayings.module.css';

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
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>ID Комнаты</th>
                            <th>ID Клиента</th>
                            <th>Дата заезда</th>
                            <th>Дата выезда</th>
                            <th>Цена</th>
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
                                    <td>{staying.price ?? '-'}</td>
                                    <td>{
                                        staying.checkOut ? '' :
                                            <Button onClick={() => checkOutModel.checkOutClicked(staying.id)} >
                                                Выселить
                                            </Button>
                                    }
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