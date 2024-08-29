describe('Inheritance', () => {
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Manager extends Employee {
    }

    class Director extends Employee {
    }

    it('should inherit', () => {
        const employe = new Employee("MEE");
        console.info(employe.name)

        const manag = new Manager("ZEE");
        console.info(manag.name)

        const direc = new Director("HMM");
        console.info(direc.name)
    });
});