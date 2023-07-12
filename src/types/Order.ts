import IOrderLineData from "./OrderLine";

export default interface IOrderData {
    orderId?: number,
    customerId?: number,
    status: string,
    totalAmount: number,
    orderDateTime?: number,
    deliveryAddress?: string,
    orderLines: IOrderLineData[]
}