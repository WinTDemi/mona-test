import { Cart } from "./Cart"

export type Order = {
    customer: {
        name: string,
        email: string,
        phone: string
    },
    carts: Cart[],
    paymentMethod: number,
    amountPaid: number,
    customerPaid: number,
    changePaid: number,
}