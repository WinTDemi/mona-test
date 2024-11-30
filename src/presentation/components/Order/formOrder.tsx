import { Button, Col, Form, Input, Radio, Row, Table } from 'antd';
import ConfirmOrder from './confirmOrder';
import { useEffect, useState } from 'react';
import FormInput from '../Form/formInput';
import FormAddProductOrder from './formAddProductOrder';
import { Order } from './types/Order';
import { Cart } from './types/Cart';
import { CloseSquareOutlined, DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';

type FormOrderProps = {
    onCloseDrawer?: () => void
}

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
    },
    {
        title: 'Discount',
        dataIndex: 'discount',
        key: 'discount',
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
    },
];

const mockDiscount = [
    {
        code: 'DISCOUNT10%',
        value: 10,
        type: 'percent'
    },
    {
        code: 'DISCOUNT20$',
        value: 20,
        type: 'value'
    }
]

const FormOrder = ({ onCloseDrawer }: FormOrderProps) => {

    const [order, setOrder] = useState<Order>({
        customer: { name: "", email: "", phone: "" },
        carts: [],
        paymentMethod: 0,
        amountPaid: 0,
        customerPaid: 0,
        changePaid: 0,
    });

    const [openModal, setOpenModal] = useState<boolean>(false);

    // Mở modal
    const showModalConfirmOrder = () => {
        setOpenModal(true);  // Open the modal
    };

    // Đóng modal
    const closeModalConfirmOrder = () => {
        setOpenModal(false);  // Open the modal
    };

    // Xử lý khi nhập thông tin khách hàng
    const handleCustomerChange = (name: string, value: string) => {
        setOrder((prevOrder) => ({
            ...prevOrder,
            customer: { ...prevOrder.customer, [name]: value },
        }));
    };

    // Xử lý khi chọn phương thức thanh toán    
    const handlePaymentMethodChange = (value: number) => {
        setOrder((prevOrder) => ({
            ...prevOrder,
            paymentMethod: value,
            customerPaid: 0,
            changePaid: 0,
        }));
    }

    // Xử lý khi nhập số tiền khách hàng trả
    const handleCustomerPaidChange = (value: number) => {
        setOrder((prevOrder) => {
            const change = (value - prevOrder.amountPaid).toFixed(2); // Tính tiền thừa
            return {
                ...prevOrder,
                customerPaid: value,
                changePaid: (parseFloat(change) < 0 || value <= 0) ? 0 : parseFloat(change), // Đảm bảo không âm
            };
        });
    };

    // Xử lý khi thêm sản phẩm vào giỏ hàng
    const handleAddNewCart = (cart: Cart) => {
        setOrder((prevOrder) => ({
            ...prevOrder,
            carts: [...prevOrder.carts, cart],
        }));
    }

    // Xử lý khi nhấn nút cộng hoặc trừ sản phẩm
    const handleUpdateCart = (cart: Cart, type: string) => {
        setOrder((prevOrder) => ({
            ...prevOrder,
            carts: prevOrder.carts.map((c) => {
                if (c.product.id === cart.product.id) {
                    if (type === "plus") {
                        c.quantity++;
                    } else {
                        c.quantity > 1 && c.quantity--;
                    }
                }
                return c;
            }),
        }));
    }

    // Xử lý khi nhấn nút xóa sản phẩm
    const handleRemoveCart = (cart: Cart) => {
        setOrder((prevOrder) => ({
            ...prevOrder,
            carts: prevOrder.carts.filter((c) => c.product.id !== cart.product.id),
        }));
    }

    // Xử lý khi nhập mã giảm giá
    const handleApplyDiscount = (cart: Cart, discountCode: string) => {
        const discount = mockDiscount.find((d) => d.code === discountCode);
        if (discount) {
            setOrder((prevOrder) => ({
                ...prevOrder,
                carts: prevOrder.carts.map((c) => {
                    if (c.product.id === cart.product.id) {
                        c.discount = {
                            code: discount.code,
                            value: discount.value,
                            type: discount.type,
                        };
                    }
                    return c;
                }),
            }));
        }
    }
    // Xử lý khi nhấn nút xóa giảm giá
    const handleRemoveDiscount = (cart: Cart) => {
        setOrder((prevOrder) => ({
            ...prevOrder,
            carts: prevOrder.carts.map((c) => {
                if (c.product.id === cart.product.id) {
                    c.discount = undefined;
                }
                return c;
            }),
        }));
    }

    // Tính tổng tiền
    const handleTotalCart = () => {
        setOrder((prevOrder) => ({
            ...prevOrder,
            amountPaid: parseFloat(
                order.carts.reduce((total, cart) => {
                    let productTotal = cart.product.price * cart.quantity;

                    if (cart.discount) {
                        if (cart.discount.type === 'value') {
                            productTotal -= cart.discount.value;
                        } else if (cart.discount.type === 'percent') {
                            productTotal -= productTotal * (cart.discount.value / 100);
                        }
                    }

                    // Kiểm tra nếu tổng sau giảm giá là âm, set về 0
                    if (productTotal < 0) {
                        productTotal = 0;
                    }

                    return total + productTotal; // Cộng vào tổng
                }, 0).toFixed(2)
            )
        }));
    }

    // Xử lý khi nhấn nút thanh toán
    const handleSubmit = () => {
        if (order.carts.length === 0) {
            alert("Please add product to cart");
            return;
        }
        if (order.customer.name === "" || order.customer.email === "" || order.customer.phone === "") {
            alert("Please enter customer information");
            return;
        }
        if (order.paymentMethod === 0 && order.customerPaid < order.amountPaid) {
            alert("Please enter money");
            return;
        }
        // đóng drawer nếu có
        showModalConfirmOrder()
        onCloseDrawer && onCloseDrawer()
    }

    useEffect(() => {
        handleTotalCart()
        handleCustomerPaidChange(order.customerPaid)
    }, [order.carts])

    return (
        <>
            <Form layout="vertical" className=''>
                <Row gutter={16}>
                    {/* Name */}
                    <Col span={8} className='motion-translate-x-in-[-110%] motion-translate-y-in-[0%] motion-duration-[3.25s]'>
                        <FormInput
                            label="Name"
                            name="name"
                            value={order.customer.name}
                            onChange={handleCustomerChange}
                            rules={[{ required: true, message: "Please enter user name" }]}
                            placeholder="Please enter user name"
                            type='text'
                        />
                    </Col>
                    {/* Email */}
                    <Col span={8} className='motion-translate-x-in-[-110%] motion-translate-y-in-[0%] motion-duration-[2.50s]'>
                        <FormInput
                            name="email"
                            label="Email"
                            value={order.customer.email}
                            onChange={handleCustomerChange}
                            rules={[{ required: true, message: "Please enter user email" }]}
                            placeholder="Please enter user email"
                            type='email'
                        />
                    </Col>
                    {/* Phone */}
                    <Col span={8} className='motion-translate-x-in-[-110%] motion-translate-y-in-[0%]'>
                        <FormInput
                            name="phone"
                            label="Phone"
                            value={order.customer.phone}
                            onChange={handleCustomerChange}
                            rules={[{ required: true, message: "Please enter user phone" }]}
                            placeholder="Please enter user phone"
                            type='text'
                        />
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24} className='motion-translate-x-in-[-110%] motion-translate-y-in-[0%] motion-duration-[1.75s]'>
                        <FormAddProductOrder carts={order.carts} addCart={handleAddNewCart} />
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Table className='motion-translate-x-in-[0%] motion-translate-y-in-[200%] motion-duration-[1.25s] transition duration-150 ease-in-out'
                            columns={columns}
                            dataSource={
                                order.carts.map((cart, index) => {
                                    return {
                                        key: index,
                                        name: cart.product.title,
                                        price: cart.product.price,
                                        amount: cart.quantity,
                                        discount:
                                            <>
                                                {/* <Input addonBefore={selectBefore} defaultValue="mysite" /> */}
                                                <Input
                                                    type='text'
                                                    placeholder='Discount code'
                                                    value={cart.discount?.code}
                                                    onChange={(e) => handleApplyDiscount(cart, e.target.value)}
                                                    addonAfter={<CloseSquareOutlined onClick={() => handleRemoveDiscount(cart)} />}
                                                />
                                            </>,
                                        action: <div className='flex justify-between'>
                                            <Button
                                                // type="primary"
                                                onClick={() => handleUpdateCart(cart, "plus")}
                                                size={'large'}
                                                icon={<PlusOutlined />}
                                            />
                                            <Button
                                                // type=""
                                                onClick={() => handleUpdateCart(cart, "minus")}
                                                size={'large'}
                                                icon={<MinusOutlined />}
                                            />
                                            <Button
                                                type="primary"
                                                onClick={() => handleRemoveCart(cart)}
                                                size={'large'}
                                                icon={<DeleteOutlined />}
                                                danger
                                            />
                                        </div>
                                    }
                                })
                            }
                        />
                    </Col>
                </Row>
                <Row gutter={16} className='my-5 motion-translate-x-in-[0%] motion-translate-y-in-[200%] motion-duration-[1.25s]'>
                    <Col span={24} className=''>
                        <Radio.Group
                            block
                            options={
                                [
                                    { label: 'Cash', value: 0 },
                                    { label: 'Card', value: 1 },
                                ]
                            }
                            defaultValue={0}
                            optionType="button"
                            buttonStyle="solid"
                            onChange={(e: any) => handlePaymentMethodChange(e.target.value)}
                        />
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24} className='mb-5'>
                        <p className='text-3xl font-bold text-right motion-translate-x-in-[200%] motion-translate-y-in-[0%] motion-duration-[1.25s]'>
                            Total: {order.amountPaid}$
                        </p>
                    </Col>
                </Row>
                {order.paymentMethod === 0 &&
                    <Row gutter={16} className='flex items-center justify-end motion-translate-x-in-[0%] motion-translate-y-in-[200%] motion-duration-[2.25s]'>
                        <Col span={6}>
                            <Form.Item
                                name="customerPaid"
                                label="Paid"
                                rules={[{ required: true, message: "Please enter paid" }]}>
                                <Input
                                    type="number"
                                    value={order.customerPaid ? order.customerPaid : 0}
                                    onChange={(e: any) => handleCustomerPaidChange(e.target.value)}
                                    placeholder="Please enter paid"
                                />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <p className='text-3xl font-bold text-right'>Change: {order.changePaid}$</p>
                        </Col>
                    </Row>
                }
                <Row gutter={16}>
                    <Col span={24} className='motion-translate-x-in-[0%] motion-translate-y-in-[200%] motion-duration-[3.25s] text-right'>
                        <Button
                            type="primary"
                            onClick={handleSubmit}
                            size={'large'}
                        >
                            Pay width {order.paymentMethod === 0 ? 'Cash' : 'Card'}
                        </Button>
                    </Col>
                </Row>
            </Form>

            <ConfirmOrder data={order} showModal={openModal} onclose={closeModalConfirmOrder} />
        </>

    )
}

export default FormOrder