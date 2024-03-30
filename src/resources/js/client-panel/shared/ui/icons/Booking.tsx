import { BookOutlined } from '@ant-design/icons'
import { IIcon } from './type'
import { FC } from 'react'

export const Booking: FC<IIcon> = ({ className }) => {
    return <BookOutlined className={className} />
}