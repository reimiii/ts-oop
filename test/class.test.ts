describe('Class', () => {
    class Customer {
        constructor() {
            console.info("create new customer");
        }
    }

    class Order {
    }

    it('should create class', () => {
        const customer: Customer = new Customer();
        const order = new Order()
    });

    it('should create constructor', () => {
        new Customer();
        new Customer();
    });
});