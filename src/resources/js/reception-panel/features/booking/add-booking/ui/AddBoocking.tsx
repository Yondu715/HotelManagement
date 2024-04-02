import { Button } from '@/reception/shared/ui/button';
import { Modal } from '@/reception/shared/ui/modal';
import { useUnit } from 'effector-react';
import { useState } from 'react';
import { $clientId, formSubmitted, setClientId } from '../model/store';
import { clientModel } from '@/reception/entity/client';
import styles from './AddBoocking.module.css';
import { Select } from '@/reception/shared/ui/select';

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
            <Button onClick={showModal}>
                Забронировать номер
            </Button>
            <Modal title="Бронирование" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <form className={styles.form}>
                    <div className={styles.formGroup}>
                        <Select
                            placeholder="Выберите клиента"
                            options={clients.map((client) => ({
                                label: `${client.id} ${client.firstName}`,
                                value: client.id
                            }))}
                            onChange={(value) => setClientId(value as number)}
                        />
                    </div>
                </form>
            </Modal>
        </>
    );
};