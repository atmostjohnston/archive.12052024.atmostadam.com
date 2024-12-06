import { BaseExpense } from "./BaseExpense.js";

export class CarMaintenance extends BaseExpense {
    constructor(value, carYearsOld) {
        super("Car Maintenance", value);
        this.carYearsOld = carYearsOld;
    }

    nextYear() {
        return new CarMaintenance(
            this.getValue(),
            this.getCarYearsOld() + 1
        )
    }

    expenseAtYear(value, yearsOld) {
        switch (yearsOld) {
            case 0:
                return value * .85;
            case 1:
                return value * .70;
            case 2:
                return value * .55;
            case 3:
                return value * .40;
            case 4:
                return value * .30;
            case 5:
                return value * .25;
        }
        return 3000;
    }

    getCarYearsOld() {
        return this.carYearsOld;
    }

    setCarYearsOld(carYearsOld) {
        this.carYearsOld = carYearsOld;
        return this;
    }
}