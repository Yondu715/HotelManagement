import { routes } from '@/shared/routing';
import { CustomLink } from './custom-link/CustomLink';
import styles from './Sidebar.module.css';
import { IconDashboard, IconClient, IconRoom, IconBooking, IconStaying } from '@/shared/ui/icons';

export const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <CustomLink
                icon={<IconDashboard className={styles.icon} />}
                to={routes.dashboard}
                label='Главная'
            />
            <CustomLink
                icon={<IconClient className={styles.icon} />}
                to={routes.clients}
                label='Клиенты'
            />
            <CustomLink
                icon={<IconRoom className={styles.icon} />}
                to={routes.rooms}
                label='Доступные номера'
            />
            <CustomLink
                icon={<IconStaying className={styles.icon} />}
                to={routes.stayings}
                label='Поселения'
            />
            <CustomLink
                icon={<IconBooking className={styles.icon} />}
                to={routes.bookings}
                label='Брони'
            />
        </div>
    );
};