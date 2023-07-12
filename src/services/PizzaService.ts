import http from "./http-common";
import IPizzaData from "../types/Pizza";

const getAll = () => {
    return http.get<IPizzaData[]>("/pizzas");
};

const get = (id: any) => {
    return http.get<IPizzaData>(`/pizzas/${id}`);
};

const PizzaDataService = {
    getAll,
    get
}

export default PizzaDataService;