import { useState} from "react"
import type { OrderItem, MenuItem } from "../types";

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item: MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if (itemExist) {
            const updateOrder = order.map(orderItem => orderItem.id === item.id ?
                {...orderItem, quantity: orderItem.quantity +1 } : orderItem)
            setOrder(updateOrder)
        }
        else {
            console.log(item)
            const newItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }

    const deleteItem = (item: OrderItem) => {
        setOrder((prevState) => prevState.filter(order => order.id !== item.id))
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    console.log(order)
    console.log(tip)

    return {
        order,
        tip,
        setTip,
        addItem,
        deleteItem,
        placeOrder
    }
}