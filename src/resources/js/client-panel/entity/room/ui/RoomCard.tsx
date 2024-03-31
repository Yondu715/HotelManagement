import { FC, ReactNode } from 'react';
import { Room } from '../model/types';
import styles from './RoomCard.module.css';

interface IRoomCard {
    room: Room,
    bookAction?: ReactNode
}

export const RoomCard: FC<IRoomCard> = ({ room, bookAction }) => {
    const { name, capacity, comfortLevel, image, price } = room;
    return (
        <div className={styles.roomCard}>
            <img src={image} alt="Комната" />
            <div className={styles.info}>
                <h3 className="text">{name}</h3>
                <p className="text">Вместительность: {capacity}</p>
                <p className="text">Тип: {comfortLevel}</p>
                <div className={styles.bottomInfo}>
                    <div className="text">
                        Цена: <span>{price} ₽</span>
                    </div>
                    {bookAction}
                </div>
            </div>
        </div>
    );
};