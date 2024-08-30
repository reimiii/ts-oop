describe('Visibility access level private, public, protected', () => {
    class Counter {
        private counter: number = 0;

        public increment(): void {
            this.counter++;
        }

        public getCounter(): number {
            return this.counter;
        }

    }

    it('should support private', () => {
        const count = new Counter();
        count.increment();
        count.increment();
        count.increment();
        console.info(count.getCounter());
    });
});