import { RoomFilters } from '@/client/features/room/room-filters';
import { useUnit } from 'effector-react';
import { RoomCard, roomModel } from '@/client/entity/room';
import { AddBoocking } from '@/client/features/booking/add-booking/ui/AddBooking';
import styles from './Rooms.module.css';

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
                                <RoomCard
                                    room={room}
                                    bookAction={<AddBoocking roomId={room.id} />}
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};