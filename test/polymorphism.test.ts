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
        if (emp instanceof VicePresident) {
            const vp = emp as VicePresident;
            console.info(`hi vp ${vp._name}`);
        } else if (emp instanceof Manager) {
            const man = emp as Manager;
            console.info(`hi manager ${man._name}`);
        } else {
            console.info(`hi employee ${emp._name}`);
        }
    }

    function sayHiWrong(emp: Employee): void {
        if (emp instanceof Manager) {
            const man = emp as Manager;
            console.info(`hi manager ${man._name}`);
        } else if (emp instanceof VicePresident) {
            const vp = emp as VicePresident;
            console.info(`hi vp ${vp._name}`);
        } else {
            console.info(`hi employee ${emp._name}`);
        }
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

    it('should wrong type cast ', () => {
        sayHiWrong(new Employee("Mee"));
        sayHiWrong(new Manager("001"));
        sayHiWrong(new VicePresident("002"));
    });
});