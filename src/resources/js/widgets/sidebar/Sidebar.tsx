import { routes } from '@/shared/routing';
import { CustomLink } from './CustomLink';
import styles from './Sidebar.module.css';
import { Divider } from '@/shared/ui/divider/Divider';

export const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.title}>Отель</div>
            <Divider />
            <div className={styles.menu}>
                <CustomLink to={routes.dashboard} label='Главная' />
                <CustomLink to={routes.clients} label='Клиенты' />
                <CustomLink to={routes.rooms} label='Доступные номера' />
                <CustomLink to={routes.stayings} label='Поселения' />
                <CustomLink to={routes.bookings} label='Брони' />
            </div>
        </div>
    );
};