abstract class Customer {
    readonly id: number;
    abstract name: string;

    constructor(id: number) {
        this.id = id;
    }

    hell() {
        console.info("Bruh");
    }

    abstract sayHi(name: string): void;
}

describe('Abstract class', () => {
    class Reg extends Customer {
        name: string;

        constructor(id: number, name: string) {
            super(id);
            this.name = name;
        }

        sayHi(name: string): void {
            console.info(`hi ${name}, my name is ${this.name}`)
        }
    }

    it('should support', () => {
        const cus = new Reg(1, "Me");
        cus.sayHi("Bug");
        cus.hell();
    });
});