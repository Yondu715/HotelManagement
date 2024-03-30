import { FC, ReactNode } from 'react';
import { Room } from '../model/types';
import styles from './RoomCard.module.css';

interface IRoomCard {
    room: Room,
    stayAction?: ReactNode
}

export const RoomCard: FC<IRoomCard> = ({ room, stayAction }) => {
    const { name, capacity, comfortLevel, image, price } = room;
    return (
        <div className={styles.roomCard}>
            <img src={image} alt="Комната" />
            <div className={styles.info}>
                <h3 className="text-capitalize fn-bold text">{name}</h3>
                <p className="fn-normal text">Вместительность: {capacity}</p>
                <p className="fn-normal text">Тип: {comfortLevel}</p>
                <div className={styles.bottomInfo}>
                    <div className="text">
                        Цена: <span className="fs-3 fn-bold">{price} ₽</span>
                    </div>
                    {stayAction}
                </div>
            </div>
        </div>
    );
};