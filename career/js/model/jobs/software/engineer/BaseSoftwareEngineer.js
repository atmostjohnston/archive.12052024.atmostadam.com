export class BaseSoftwareEngineer {
    constructor(title, jobLevel, salary, performanceBonus, stockOptions, responsibilities) {
        this.title = title;
        this.jobLevel = jobLevel;
        this.salary = salary;
        this.performanceBonus = performanceBonus;
        this.stockOptions = stockOptions;
        this.responsibilities = responsibilities;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
        return this;
    }

    getJobLevel() {
        return this.jobLevel;
    }

    setJobLevel(jobLevel) {
        this.jobLevel = jobLevel;
    }

    getSalary() {
        return this.salary;
    }

    setSalary(salary) {
        this.salary = salary;
        return this;
    }

    getPerformanceBonus() {
        return this.performanceBonus;
    }

    setPerformanceBonus(performanceBonus) {
        this.performanceBonus = performanceBonus;
        return this;
    }

    getStockOptions() {
        return this.stockOptions;
    }

    setStockOptions(stockOptions) {
        this.stockOptions = stockOptions;
        return this;
    }

    getResponsibilities() {
        return this.responsibilities;
    }

    setResponsibilities(responsibilities) {
        this.responsibilities = responsibilities;
        return this;
    }
}