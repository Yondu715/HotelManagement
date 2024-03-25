import { useUnit } from 'effector-react';
import { $comment, $error, $firstName, $isLoading, $lastName, $middleName, $number, $series, errorAlertClosed, formSubmitted, setComment, setFirstName, setLastName, setMiddleName, setNumber, setSeries } from '../model/store';
import styles from './AddClientForm.module.css';
import { Button } from '@/shared/ui/button';
import { ErrorBlock } from '@/shared/ui/error';

export const AddClientForm = () => {
    const {
        firstName, lastName, middleName, comment, number, series, isLoading, error
    } = useUnit({
        firstName: $firstName,
        lastName: $lastName,
        middleName: $middleName,
        comment: $comment,
        number: $number,
        series: $series,
        isLoading: $isLoading,
        error: $error
    })

    return (
        <form className={styles.form}>
            {
                error &&
                <ErrorBlock message={error} onClose={() => errorAlertClosed()} />
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
                <Button text='Добавить' loading={isLoading} className={styles.actionButton} onClick={(e) => {
                    e.preventDefault();
                    formSubmitted();
                }} />
            </div>
        </form>
    );
};