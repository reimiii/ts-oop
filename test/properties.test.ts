import {name} from "ts-jest/dist/transformers/hoist-jest";

describe('Properties or attribute', () => {
    class Customer {
        readonly id: number;
        name: string;
        age?: number;

        constructor(id: number, name: string) {
            this.id = id;
            this.name = name;
        }
    }

    it('should have props', () => {

        const customer: Customer = new Customer(1, "Mee");
        customer.age = 20;
        console.info(customer);
        console.info(customer.id);
        console.info(customer.name);
        console.info(customer.age);

    });
});