describe('Relationship object', () => {
    class Person {
        constructor(public _name: string) {
        }
    }

    class Customer {
        constructor(public _name: string) {
        }
    }

    it('should support', () => {
        const p: Person = new Customer("CUS");
        console.info(p._name)
    });
});