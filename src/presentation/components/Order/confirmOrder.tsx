import { Button, Modal, Table } from "antd"
import { Order } from "./types/Order";

type ConfirmOrderProps = {
    data: Order;           // Data to be displayed
    showModal: boolean;   // State to control if the modal is open
    onclose: () => void;  // Function to close the modal
};

const columns = [
    {
        title: 'Product',
        dataIndex: 'product',
        key: 'product',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
    },
    {
        title: 'Discount',
        dataIndex: 'discount',
        key: 'discount',
    },
];

const ConfirmOrder = ({ data, showModal, onclose }: ConfirmOrderProps) => {

    // console.log(data);
    // const [loading, setLoading] = React.useState<boolean>(true);

    return (
        <Modal
            title={<p>Bill</p>}
            // loading={loading}
            footer={
                // Button inside modal to trigger a reload action
                <Button type="primary" onClick={() => onclose()}>
                    Close
                </Button>
            }
            width={800}
            open={showModal}
            onCancel={() => onclose()} // Turn off the modal when clicking out or press the X button
        >
            <div className="flex justify-between">
                <strong>Customer:</strong>
                <p>{data.customer.name}</p>
            </div>
            <div className="flex justify-between">
                <strong>Email:</strong>
                <p>{data.customer.email}</p>
            </div>
            <div className="flex justify-between">
                <strong>Phone:</strong>
                <p>{data.customer.phone}</p>
            </div>

            <div className="flex justify-between">
                <strong>Payment Method:</strong>
                <p>{data.paymentMethod === 1 ? 'Credit Card' : 'Cash'}</p>
            </div>
            <div className="flex justify-between">
                <strong>Total Paid:</strong>
                <p>${data.amountPaid}</p>
            </div>
            <div className="flex justify-between">
                <strong>Customer Paid:</strong>
                <p>${data.customerPaid}</p>
            </div>
            <div className="flex justify-between">
                <strong>Change Given:</strong>
                <p>${data.changePaid}</p>
            </div>
            <div className="text-center">
                <strong>Order Details</strong>
            </div>
            <Table columns={columns} dataSource={
                data.carts.map((cart, index) => {
                    return {
                        key: index,
                        product: cart.product.title,
                        price: cart.product.price,
                        quantity: cart.quantity,
                        discount: cart.discount ? cart.discount.value : '0$'
                    }
                })
            }
            />

        </Modal>
    )
}

export default ConfirmOrder