export class BaseExpense {
    constructor(id, value) {
        this.id = id;
        this.value = value;
    }

    pay() {
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
    }
}