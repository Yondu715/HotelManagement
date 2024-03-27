import { useUnit } from 'effector-react';
import {
    $comment, $error, $firstName,
    $isLoading, $lastName, $middleName,
    $number, $series, formSubmitted, setComment,
    setFirstName, setLastName, setMiddleName,
    setNumber, setSeries
} from '../model/store';
import { Button } from '@/shared/ui/button';
import { ErrorBlock } from '@/shared/ui/error';
import styles from './AddClientForm.module.css';
import { MouseEvent, useState } from 'react';
import { Modal } from '@/shared/ui/modal';

export const AddClientForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const buttonHandler = (e: MouseEvent) => {
        e.preventDefault();
        formSubmitted();
    }

    const {
        firstName, lastName, middleName,
        comment, number, series, isLoading, error
    } = useUnit({
        firstName: $firstName,
        lastName: $lastName,
        middleName: $middleName,
        comment: $comment,
        number: $number,
        series: $series,
        isLoading: $isLoading,
        error: $error
    });


    return (
        <>
            <Button onClick={showModal}>
                Добавить гостя
            </Button>
            <Modal title="Добавление гостя" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <form className={styles.form}>
                    {
                        error &&
                        <ErrorBlock message={error} />
                    }
                    <div className={styles.formGroup}>
                        <input
                            className={styles.formInput}
                            type='text'
                            placeholder='Имя'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input
                            className={styles.formInput}
                            type='text'
                            placeholder='Фамилия'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input
                            className={styles.formInput}
                            type='text'
                            placeholder='Отчество'
                            value={middleName}
                            onChange={(e) => setMiddleName(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input
                            className={styles.formInput}
                            type='text'
                            placeholder='Серия'
                            value={series}
                            onChange={(e) => setSeries(e.target.value)}
                            required
                        />
                        <input
                            className={styles.formInput}
                            type='text'
                            placeholder='Номер'
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input
                            className={styles.formInput}
                            type='text'
                            placeholder='Комментарий'
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <Button loading={isLoading} className={styles.actionButton} onClick={buttonHandler}>
                            Добавить
                        </Button>
                    </div>
                </form>
            </Modal>
        </>
    );
};