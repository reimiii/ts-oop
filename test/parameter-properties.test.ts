describe('Param in Constructor make it props', () => {
    class Person {
        constructor(public name: string) {
        }
    }

    it('should support param properties', () => {
        const person = new Person("Mee");
        console.info(person.name);
    });
});