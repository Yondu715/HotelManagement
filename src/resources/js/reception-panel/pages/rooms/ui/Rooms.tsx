import { RoomFilters } from '@/reception/features/room/room-filters';
import styles from './Rooms.module.css';
import { Title } from '@/reception/shared/ui/title';
import { useUnit } from 'effector-react';
import { RoomCard, roomModel } from '@/reception/entity/room';
import { Empty } from '@/reception/shared/ui/empty';
import { setSelectedRoomId } from '@/reception/entity/room/model/store';
import { Select } from '@/reception/shared/ui/select';
import { OrderRoomType } from '@/reception/entity/room/model/types';
import { AddStaying } from '@/reception/features/staying/add-staying';
import { AddBoocking } from '@/reception/features/booking/add-booking';

export const RoomsPage = () => {
    const rooms = useUnit(roomModel.$rooms);
    const type = useUnit(roomModel.$type);
    const selectedRoomId = useUnit(roomModel.$selectedRoomId);

    return (
        <div className={styles.page}>
            <div className={styles.titleContainer}>
                <Title text='Номера' />
                <Select
                    options={[
                        {
                            value: OrderRoomType.STAY,
                            label: 'Заселение'
                        }, {
                            value: OrderRoomType.BOOK,
                            label: 'Бронирование'
                        }
                    ]}
                    onChange={(value) => roomModel.setType(value as OrderRoomType)}
                    value={type}
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