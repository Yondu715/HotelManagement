import { Button } from '@/shared/ui/button';
import { Modal } from '@/shared/ui/modal';
import { useUnit } from 'effector-react';
import { useEffect, useState } from 'react';
import { $clientId, $note, formSubmitted, pageMounted, setClientId, setNote } from '../model/store';
import { clientModel } from '@/entity/client';
import styles from './RoomStaying.module.css';

export const RoomStaying = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {
        note, clients
    } = useUnit({
        note: $note,
        clientId: $clientId,
        clients: clientModel.$clients
    });

    useEffect(() => {
        pageMounted();
    }, []);

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
            <Button text='Заселить гостя' onClick={showModal} />
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
                        <select>
                            {
                                clients.map((client) =>
                                    <option
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