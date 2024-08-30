describe('Polymorphism', () => {
    class Employee {
        constructor(public _name: string) {
        }
    }

    class Manager extends Employee {
    }

    class VicePresident extends Manager {
    }

    function sayHi(emp: Employee): void {
        console.info(`hi ${emp._name}`);
    }

    it('should support polymorphism', () => {
        let emp: Employee = new Employee("hilmi");
        console.info(emp);

        emp = new Manager("hilmi");
        console.info(emp);

        emp = new VicePresident("hilmi");
        console.info(emp);
    });

    it('should support polymorphism method', () => {
        sayHi(new Employee("Mee"));
        sayHi(new Manager("001"));
        sayHi(new VicePresident("002"));
    });
});