describe('Getter and Setter', () => {
    class Category {
        _name: string;

        get name(): string {
            if (this._name) {
                return this._name;
            } else {
                return "empty";
            }
        };

        set name(v: string) {
            if (v) { // !== ""
                this._name = v;
            }
        };
    }

    it('should support is Class TS', () => {
        const cat: Category = new Category();
        console.info(cat.name);

        cat.name = "Drink";
        console.info(cat.name);

        cat.name = "";
        console.info(cat.name);
    });
});