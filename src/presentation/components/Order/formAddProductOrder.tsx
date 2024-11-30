import { Form, Select } from "antd";
import { useFetchSearchProduct } from "../../../application/hooks/product/useFetchSearchProduct";
import { useState } from "react";
import { Cart } from "./types/Cart";


type FormAddProductOrderProps = {
    carts: Cart[],
    addCart: (product: Cart) => void
}

const FormAddProductOrder = ({ carts, addCart }: FormAddProductOrderProps) => {

    const [searchProduct, setSearchProduct] = useState<string>('');
    const { data } = useFetchSearchProduct(searchProduct); // call API to get products

    const onChange = (value: number) => {
        const existingCart = carts.find(cart => cart.product.id === value);
        if (existingCart) {
            existingCart.quantity++;
        } else {
            // Nếu sản phẩm chưa tồn tại, tìm trong danh sách dữ liệu
            const product = data?.products?.find((product: any) => product.id === value);
            if (product) {
                addCart({
                    product: product,
                    quantity: 1
                });
            }
        }
    };

    const onSearch = (value: string) => {
        // console.log('search:', value);
        setSearchProduct(value);
    };

    return (
        <Form.Item
            name="add-product"
            label="Add product"
            rules={[{ required: true, message: 'Please select an owner' }]}
        >
            <Select
                showSearch
                placeholder="Select a person"
                optionFilterProp="label"
                onChange={onChange}
                onSearch={onSearch}
                // nếu data rổng thì component select ant có tự hiện thị "no data"
                options=
                {
                    data?.products?.map((product: any) => {
                        return {
                            label: product.title,
                            value: product.id,
                        }
                    })
                }
            />
        </Form.Item>
    );
}

export default FormAddProductOrder