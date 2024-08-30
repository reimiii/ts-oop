describe('Error handling', () => {
    class ValidationErr extends Error {
        constructor(public message: string) {
            super(message);
        }
    }

    function doubleInt(v: number): number {
        if (v < 0) throw new ValidationErr("0 is not valid");

        return v * 2;
    }

    it('should support error handling in TS', () => {
        try {
            const res = doubleInt(-2);
            console.info(res);
        } catch (e) {
            if (e instanceof ValidationErr) console.info(e.message);
        }
    });
});