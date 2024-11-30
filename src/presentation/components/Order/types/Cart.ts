import { Product } from "../../../../application/entities/Product"

export type Cart = {
    product: Product,
    quantity: number,
    discount?: {
        code: string,
        value: number,
        type: string,
    }
}