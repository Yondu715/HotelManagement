import { IdcardOutlined } from '@ant-design/icons'
import { IIcon } from './type'
import { FC } from 'react'

export const Client: FC<IIcon> = ({ className }) => {
    return <IdcardOutlined className={className} />
}