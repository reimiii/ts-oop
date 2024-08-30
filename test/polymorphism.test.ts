describe('Polymorphism', () => {
    class Employee {
        constructor(public _name: string) {
        }
    }

    class Manager extends Employee {
    }

    class VicePresident extends Manager {
    }

    it('should support polymorphism', () => {
        let emp: Employee = new Employee("hilmi");
        console.info(emp);

        emp = new Manager("hilmi");
        console.info(emp);

        emp = new VicePresident("hilmi");
        console.info(emp);
    });
});