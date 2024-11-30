import { ShoppingCartOutlined } from '@ant-design/icons'
import { Button, Drawer, Space } from 'antd'
import { useState } from 'react';
import FormOrder from './formOrder';

const CreateOrder = () => {
    const [openDrawerOrder, setOpenDrawerOrder] = useState(false);

    const showDrawerOrder = () => {
        setOpenDrawerOrder(true);
    };

    const onCloseDrawerOrder = () => {
        setOpenDrawerOrder(false);
    };

    return (
        <div className='p-6'>
            <Button
                type="default"
                onClick={showDrawerOrder}
                icon={<ShoppingCartOutlined className='text-5xl' />}
                size={'large'}
            />

            <Drawer
                title="Order"
                placement={'bottom'}
                closable={false}
                onClose={onCloseDrawerOrder}
                open={openDrawerOrder}
                key={'order'}
                size={'large'}
                extra={
                    <Space>
                        <Button onClick={onCloseDrawerOrder}>Cancel</Button>
                    </Space>
                }
            >
                {/* Form creacte order */}
                <FormOrder onCloseDrawer={onCloseDrawerOrder} />
            </Drawer>
        </div>
    )
}

export default CreateOrder