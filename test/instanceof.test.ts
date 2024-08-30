describe('Instance Of', () => {
    class Employee {
    }

    class Manager {
    }

    const emp = new Employee();
    const man = new Manager();

    it('should have some problem using typeof', () => {
        console.info(typeof emp);
        console.info(typeof man);
    });

    it('should no prob using instanceof', () => {
        console.info(emp instanceof Employee)
        console.info(emp instanceof Manager)

        expect(man instanceof Manager).toBe(true);
        expect(man instanceof Employee).toBe(false);
    });
});