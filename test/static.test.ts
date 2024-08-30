describe('Static', () => {
    class Conf {
        static VERSION: number = 1.10;
        static KEY: string = "SECRET";
    }

    class Utils {
        static sum(...v: number[]): number {
            let t = 0;
            for (const n of v) {
                t += n;
            }

            return t;
        }
    }

    it('should static method', () => {
        console.info(Utils.sum(1, 2, 3, 4, 5));
    });

    it('should support properties', () => {
        console.info(Conf.KEY);
        console.info(Conf.VERSION);
    });
});