import { Empty as Emt } from 'antd';
import { FC } from 'react';
import styles from './Empty.module.css';

export const Empty: FC = () => {
    return (
        <div className={styles.empty}>
            <Emt description="Нет данных("/>
        </div>
    );
};