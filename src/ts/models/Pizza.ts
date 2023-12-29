import { DataResource } from "../services/dataResource";

export interface PizzaProps {
    title: string,
    description: string,
    toppings: string[],
    price: number
}

export const Pizza = new DataResource<PizzaProps>(
    ' http://localhost:3000/pizzas'
)

