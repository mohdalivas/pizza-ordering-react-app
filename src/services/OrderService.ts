import http from './http-common';
import IOrderData from '../types/Order';

const createOrder = (order: IOrderData) => {
    return http.post<IOrderData>('/order', order);
}

const PizzaDataService = {
    createOrder
}

export default PizzaDataService;
