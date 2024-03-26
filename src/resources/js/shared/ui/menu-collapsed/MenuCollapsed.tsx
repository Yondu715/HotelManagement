import { Button, Menu, MenuProps } from 'antd';
import { FC, useState } from 'react';

export const MenuCollapsed: FC<MenuProps> = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <>
            <Button onClick={toggleCollapsed}>12</Button>
            <Menu {...props} inlineCollapsed={collapsed} >
                <Menu.Item>
                    12
                </Menu.Item>
            </Menu>
        </>
    );
};