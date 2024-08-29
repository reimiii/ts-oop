describe('Interface can be data or method', () => {
    interface HasName {
        name: string;
    }

    interface CanSayHi {
        sayHi(name: string): void;
    }

    class Person implements HasName, CanSayHi {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHi(name: string): void {
            console.info(`hi ${name}, my name is ${this.name}`);
        }
    }

    it('should support data and method', () => {
        const person: Person = new Person("Mee");
        person.sayHi("Pacman");
    });
});