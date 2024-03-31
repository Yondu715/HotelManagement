import { RoomFilters } from '@/client/features/room/room-filters';
import styles from './Rooms.module.css';
import { useUnit } from 'effector-react';
import { RoomCard, roomModel } from '@/client/entity/room';

export const RoomsPage = () => {

    const rooms = useUnit(roomModel.$rooms);

    return (
        <div className={styles.page}>
            <div className={styles.background}>
                <div className={styles.overlay} />
            </div>
            <div className={styles.dataContainer}>
                <RoomFilters />
                <div className={styles.roomsContainer}>
                    {
                        rooms.map((room) =>
                            <div key={room.id} className={styles.roomWrap}>
                                <RoomCard room={room} />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};