import { FC, MouseEvent } from 'react';
import { useUnit } from 'effector-react';
import { $email, $error, $isLoading, $password, errorAlertClosed, formSubmited, setEmail, setPassword } from '../model/store';
import { Button } from '@/shared/ui/button';
import { ErrorBlock } from '@/shared/ui/error';
import styles from './LoginForm.module.css';

export const LoginForm: FC = () => {
    const {
        email, password, isLoading, error
    } = useUnit({
        email: $email,
        password: $password,
        isLoading: $isLoading,
        error: $error
    });

    const submitHandler = (e: MouseEvent) => {
        e.preventDefault();
        formSubmited();
    }

    return (
        <form className={styles.form}>
            {
                error &&
                <ErrorBlock message={error} onClose={() => errorAlertClosed()} />
            }
            <div className={styles.formGroup}>
                <input
                    className={styles.formInput}
                    type='email'
                    placeholder='Почта'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <input
                    className={styles.formInput}
                    type='password'
                    placeholder='Пароль'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <Button
                    loading={isLoading}
                    className={styles.actionButton}
                    onClick={submitHandler}
                >
                    Войти
                </Button>
            </div>
        </form>
    );
};