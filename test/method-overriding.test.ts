describe('Method Overriding', () => {
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHi(name: string): void {
            console.info(`hi ${name}, my name is ${this.name}`);
        }
    }

    class Manager extends Employee {

        sayHi(name: string) {
            super.sayHi(name);
            console.info("Me is ur manager");
        }
    }

    it('should overriding', () => {
        const emp = new Employee("Yuna");
        emp.sayHi("Rim");

        const man = new Manager("Beni");
        man.sayHi("Yuna");
    });
});