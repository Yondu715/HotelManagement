import { Button } from '@/shared/ui/button';
import { Modal } from '@/shared/ui/modal';
import { useUnit } from 'effector-react';
import { useState } from 'react';
import { $clientId, formSubmitted, setClientId } from '../model/store';
import { clientModel } from '@/entity/client';
import styles from './AddBoocking.module.css';

export const AddBoocking = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {
        clients
    } = useUnit({
        clientId: $clientId,
        clients: clientModel.$clients
    });

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        formSubmitted();
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button text='Забронировать номер' onClick={showModal} />
            <Modal title="Бронирование" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <form className={styles.form}>
                    <div className={styles.formGroup}>
                        <select defaultValue={''}>
                            <option value={''} disabled>Выберите клиента</option>
                            {
                                clients.map((client) =>
                                    <option
                                        key={client.id}
                                        value={client.id}
                                        onClick={() => setClientId(client.id)}
                                    >
                                        {`${client.id} ${client.firstName}`}
                                    </option>
                                )
                            }
                        </select>
                    </div>
                </form>
            </Modal>
        </>
    );
};