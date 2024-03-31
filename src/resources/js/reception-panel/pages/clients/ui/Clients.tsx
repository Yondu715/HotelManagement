import { Title } from '@/reception/shared/ui/title';
import styles from './Clients.module.css';
import { FC, useEffect } from 'react';
import { useUnit } from 'effector-react';
import { clientModel } from '@/reception/entity/client';
import { AddClientForm } from '@/reception/features/client/add-client';
import { Empty } from '@/reception/shared/ui/empty';
import { pageMounted } from '../model/store';

export const ClientsPage: FC = () => {
    const clients = useUnit(clientModel.$clients);

    useEffect(() => {
        pageMounted();
    }, []);

    return (
        <div className={styles.page}>
            <div className={styles.titleContainer}>
                <Title text='Клиенты' />
                <AddClientForm />
            </div>
            <div className={styles.dataContainer}>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Имя</th>
                            <th>Фамилия</th>
                            <th>Отчество</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            clients.map((client) =>
                                <tr key={client.id}>
                                    <td>{client.id}</td>
                                    <td>{client.firstName}</td>
                                    <td> {client.lastName} </td>
                                    <td> {client.middleName}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
                {
                    clients.length === 0 &&
                    <Empty />
                }
            </div>
        </div>
    );
};