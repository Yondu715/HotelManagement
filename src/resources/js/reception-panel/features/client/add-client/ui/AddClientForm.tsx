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
import { ChangeEvent, MouseEvent, useState } from 'react';
import { Modal } from '@/shared/ui/modal';
import { IconAddUser } from '@/shared/ui/icons';
import { Input } from '@/shared/ui/input';
import styles from './AddClientForm.module.css';

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
                <IconAddUser />
                Добавить клиента
            </Button>
            <Modal
                title="Добавление гостя"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <form className={styles.form}>
                    {
                        error &&
                        <ErrorBlock message={error} />
                    }
                    <div className={styles.formGroup}>
                        <Input
                            type='text'
                            placeholder='Имя'
                            value={firstName}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <Input
                            type='text'
                            placeholder='Фамилия'
                            value={lastName}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <Input
                            type='text'
                            placeholder='Отчество'
                            value={middleName}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setMiddleName(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <Input
                            type='text'
                            placeholder='Серия'
                            value={series}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setSeries(e.target.value)}
                            required
                        />
                        <Input
                            type='text'
                            placeholder='Номер'
                            value={number}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <Input
                            type='text'
                            placeholder='Комментарий'
                            value={comment}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setComment(e.target.value)}
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