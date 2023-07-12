
export default interface IOrderLineData {
    orderLineId?: number,
    orderId?: number,
    pizzaId: number,
    size: string,
    quantity: number,
    totalPrice: number
}