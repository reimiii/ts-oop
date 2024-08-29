describe('Super Class keyword', () => {
    class Person {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Employee extends Person {
        department: string;

        constructor(name: string, department: string) {
            super(name);
            this.department = department;
        }
    }

    it('should support parent constructor', () => {
        const emp = new Employee("Hilmi", "IT");
        console.info(emp.name);
        console.info(emp.department);
    });
});