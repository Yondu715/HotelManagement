import { InboxOutlined } from '@ant-design/icons'
import { IIcon } from './type'
import { FC } from 'react'

export const Room: FC<IIcon> = ({ className }) => {
    return <InboxOutlined className={className} />
}