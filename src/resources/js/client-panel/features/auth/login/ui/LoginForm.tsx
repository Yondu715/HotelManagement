import { ChangeEvent, FC, MouseEvent } from 'react';
import { useUnit } from 'effector-react';
import { $email, $error, $isLoading, $password, formSubmited, setEmail, setPassword } from '../model/store';
import { Button } from '@/reception/shared/ui/button';
import { ErrorBlock } from '@/reception/shared/ui/error';
import { Input } from '@/reception/shared/ui/input';
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
                <ErrorBlock message={error} />
            }
            <div className={styles.formGroup}>
                <Input
                    type='email'
                    placeholder='Почта'
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <Input
                    type='password'
                    placeholder='Пароль'
                    value={password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
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