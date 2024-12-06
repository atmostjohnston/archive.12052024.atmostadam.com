export class BaseRevenue {
    constructor(id, value) {
        this.id = id;
        this.value = value;
    }

    collect() {
        return this.value;
    }

    getId() {
        return this.id;
    }

    getValue() {
        return this.value;
    }

    setValue(value) {
        this.value = value;
        return this;
    }
}