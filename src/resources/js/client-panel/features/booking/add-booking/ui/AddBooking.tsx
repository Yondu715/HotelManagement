import { Button } from '@/reception/shared/ui/button';
import { Modal } from '@/reception/shared/ui/modal';
import { useState } from 'react';
import { formSubmitted } from '../model/store';
import styles from './AddBoocking.module.css';

export const AddBoocking = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                        
                    </div>
                </form>
            </Modal>
        </>
    );
};