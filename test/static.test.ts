describe('Static', () => {
    class Conf {
        static VERSION: number = 1.10;
        static KEY: string = "SECRET";
    }

    it('should support properties', () => {
        console.info(Conf.KEY);
        console.info(Conf.VERSION);
    });
});