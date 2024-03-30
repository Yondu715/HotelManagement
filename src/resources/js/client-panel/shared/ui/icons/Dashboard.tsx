import { DashboardOutlined } from '@ant-design/icons'
import { FC } from 'react'
import { IIcon } from './type'

export const Dashboard: FC<IIcon> = ({ className }) => {
    return <DashboardOutlined className={className} />
}