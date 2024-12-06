import { Assets } from "../assets/Assets.js";
import { Liabilities } from "../liabilities/Liabilities.js";
import { Revenue } from "../revenue/Revenue.js";
import { Expenses } from "../expenses/Expenses.js";
import { Year } from "../year/Year.js";

export class Player {
    constructor(context, job, startingAge, age) {
        this.context = context;
        this.job = job;
        this.startingAge = startingAge;
        this.age = age;
        this.assets = new Assets(this.context);
        this.liabilites = new Liabilities(this.context);
        this.revenue = new Revenue(this.context);
        this.expenses = new Expenses(this.context);
        this.years = [];
    }

    nextYear() {
        let oldJob = this.job.nextYear();
        let oldAssets = this.assets.nextYear();
        let oldLiabilities = this.liabilites.nextYear();
        let oldRevenue = this.revenue.nextYear()
        let oldExpenses = this.expenses.nextYear();
        let oldYear = new Year(
            this.context,
            oldJob,
            oldAssets,
            oldLiabilities,
            oldRevenue,
            oldExpenses
        );
        this.years.push(oldYear);
        return oldYear;
    }

    getAssets() {
        return this.assets;
    }

    getLiabilities() {
        return this.liabilites;
    }

    getRevenue() {
        return this.revenue;
    }

    getExpenses() {
        return this.expenses;
    }

    getJob() {
        return this.job;
    }

    setJob(job) {
        this.job = job;
        return this;
    }

    getAge() {
        return this.age;
    }

    getStartingAge() {
        return this.startingAge;
    }

    getYears() {
        return this.years;
    }

    getLastYear() {
        return this.years[this.years.length - 1];
    }
}