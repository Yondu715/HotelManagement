import { RoomFilters } from '@/features/room/room-filters';
import styles from './Rooms.module.css';
import { Title } from '@/shared/ui/title';
import { useUnit } from 'effector-react';
import { RoomCard, roomModel } from '@/entity/room';
import { Empty } from '@/shared/ui/empty';
import { setSelectedRoomId } from '@/entity/room/model/store';
import { Select } from '@/shared/ui/select';
import { OrderRoomType } from '@/entity/room/model/types';
import { AddStaying } from '@/features/staying/add-staying';
import { AddBoocking } from '@/features/booking/add-booking';

export const RoomsPage = () => {
    const rooms = useUnit(roomModel.$rooms);
    const type = useUnit(roomModel.$type);
    const selectedRoomId = useUnit(roomModel.$selectedRoomId);

    return (
        <div className={styles.page}>
            <div className={styles.titleContainer}>
                <Title text='Номера' />
                <Select
                    defaultValue={'Заселение'}
                    options={[
                        {
                            label: 'Заселение',
                            value: OrderRoomType.STAY
                        }, {
                            label: 'Бронирование',
                            value: OrderRoomType.BOOK
                        }
                    ]}
                    onChange={(value) => roomModel.setType(value as OrderRoomType)}
                />
            </div>
            <RoomFilters />
            <div className={styles.dataContainer}>
                {
                    rooms.length === 0 &&
                    <Empty />
                }
                {
                    rooms.map((room) =>
                        <div
                            key={room.id}
                            onClick={() => setSelectedRoomId(room.id)}
                            className={[styles.roomWrap, room.id === selectedRoomId ? styles.active : ''].join(' ')}
                        >
                            <RoomCard room={room} />
                        </div>
                    )
                }
            </div>
            {
                (selectedRoomId && type === 'stay') &&
                <AddStaying />
            }
            {
                (selectedRoomId && type === 'book') &&
                <AddBoocking />
            }
        </div>
    );
};