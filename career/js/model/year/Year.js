export class Year {
    constructor(context, job, assets, liabilities, revenue, expenses) {
        this.context = context;
        this.job = job;
        this.assets = assets;
        this.liabilities = liabilities;
        this.revenue = revenue;
        this.expenses = expenses;
    }

    getJob() {
        return this.job;
    }

    getAssets() {
        return this.assets;
    }

    getLiabilities() {
        return this.liabilities;
    }

    getRevenue() {
        return this.revenue;
    }

    getExpenses() {
        return this.expenses;
    }
}