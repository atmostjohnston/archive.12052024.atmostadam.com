import { careerGameContext } from "./../../context/CareerGameContext.js";

export class Revenue {
    update() {

    }

    draw() {

    }

    nextYear() {
        return new Revenue(this.context);
    }

    asSortedArray() {
        let arr = [
            ["Performance Bonus", this.getPerformanceBonus()],
            ["Salary", this.getSalary()],
            ["Stock Options", this.getStockOptions()]
        ];
        return arr.sort((a, b) => a[1] - b[1]).reverse();
    }

    getValue() {
        var sum = 0;
        this.asSortedArray().forEach(e => sum += e[1]);
        return sum;
    }

    getPerformanceBonus() {
        return careerGameContext.getPlayer().getJob().getPerformanceBonus();
    }

    getSalary() {
        return careerGameContext.getPlayer().getJob().getSalary();
    }

    getStockOptions() {
        return careerGameContext.getPlayer().getJob().getStockOptions();
    }
}