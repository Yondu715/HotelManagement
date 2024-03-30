import { Button } from '@/shared/ui/button';
import { Modal } from '@/shared/ui/modal';
import { useUnit } from 'effector-react';
import { ChangeEvent, useState } from 'react';
import { $clientId, $note, formSubmitted, setClientId, setNote } from '../model/store';
import { clientModel } from '@/entity/client';
import { Input } from '@/shared/ui/input';
import styles from './AddStaying.module.css';
import { Select } from '@/shared/ui/select';

export const AddStaying = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const {
        note, clients
    } = useUnit({
        note: $note,
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
            <Button onClick={showModal} >
                Заселить гостя
            </Button>
            <Modal title="Заселение" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <form className={styles.form}>
                    <div className={styles.formGroup}>
                        <Select
                            onChange={(value) => setClientId(value as number)}
                            placeholder={'Выберите клиента'}
                            options={clients.map((client) => ({
                                key: client.id,
                                label: `${client.id} ${client.firstName}`
                            }))}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <Input
                            placeholder='Замечание'
                            type='text'
                            value={note}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setNote(e.target.value)}
                        />
                    </div>
                </form>
            </Modal>
        </>
    );
};