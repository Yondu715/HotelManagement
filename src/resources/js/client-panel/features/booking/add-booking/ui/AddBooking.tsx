import { Button } from '@/reception/shared/ui/button';
import { Modal } from '@/reception/shared/ui/modal';
import { ChangeEvent, FC, useState } from 'react';
import {
    $firstName, $lastName, $middleName,
    $passportNumber, $passportSeries,
    setFirstName, setLastName, setMiddleName,
    setPassportNumber, setPassportSeries, setRoomId,
    formSubmitted
} from '../model/store';
import { Input } from '@/client/shared/ui/input';
import { useUnit } from 'effector-react';
import styles from './AddBooking.module.css';

interface IAddBooking {
    roomId: number
}

export const AddBoocking: FC<IAddBooking> = ({ roomId }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const {
        firstName, lastName, middleName, passportNumber, passportSeries
    } = useUnit({
        firstName: $firstName,
        lastName: $lastName,
        middleName: $middleName,
        passportSeries: $passportSeries,
        passportNumber: $passportNumber
    });

    const showModal = () => {
        setRoomId(roomId);
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button onClick={showModal}>
                Забронировать номер
            </Button>
            <Modal
                title="Бронирование"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={() => []}
            >
                <form className={styles.form}>
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
                            placeholder='Серия паспорта'
                            value={passportSeries}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassportSeries(e.target.value)}
                            required
                        />
                        <Input
                            type='text'
                            placeholder='Номер паспорта'
                            value={passportNumber}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassportNumber(e.target.value)}
                            required
                        />
                    </div>
                    <Button onClick={() => formSubmitted()}>
                        Забронировать
                    </Button>
                </form>
            </Modal>
        </>
    );
};