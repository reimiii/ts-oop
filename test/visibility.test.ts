describe('Visibility access level private, public, protected', () => {
    class Counter {
        protected counter: number = 0;

        public increment(): void {
            this.counter++;
        }

        public getCounter(): number {
            return this.counter;
        }

    }

    class DoubleCounter extends Counter {

        public increment(): void {
            this.counter += 2;
        }
    }


    it('should support private', () => {
        const count = new Counter();
        count.increment();
        count.increment();
        count.increment();
        console.info(count.getCounter());
    });

    it('should support protected', () => {
        const count = new DoubleCounter();
        count.increment();
        count.increment();
        count.increment();
        console.info(count.getCounter());
    });
});