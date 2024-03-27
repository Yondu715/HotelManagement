import { Button } from '@/shared/ui/button';
import { Modal } from '@/shared/ui/modal';
import { useUnit } from 'effector-react';
import { useState } from 'react';
import { $clientId, $note, formSubmitted, setClientId, setNote } from '../model/store';
import { clientModel } from '@/entity/client';
import styles from './AddStaying.module.css';

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
                        <input
                            placeholder='Замечание'
                            className={styles.formInput}
                            type='text'
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        />
                    </div>
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