import { UserAddOutlined } from '@ant-design/icons'
import { IIcon } from './type'
import { FC } from 'react'

export const AddUser: FC<IIcon> = ({ className }) => {
    return <UserAddOutlined className={className} />
}