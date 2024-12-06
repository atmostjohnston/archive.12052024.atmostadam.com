import { BankAccount } from "./BankAccount.js";
import { Car } from "./Car.js";
import { CertificateOfDeposit } from "./CertificateOfDeposit.js";
import { CorporateBond } from "./CorporateBond.js";
import { House } from "./House.js";
import { JunkBond } from "./JunkBond.js";
import { NasdaqIndex } from "./NasdaqIndex.js";
import { NyseIndex } from "./NyseIndex.js";
import { SavingsAccount } from "./SavingsAccount.js";
import { Snp500Index } from "./Snp500Index.js";
import { TreasuryBill } from "./TreasuryBill.js";

export class Assets {
    constructor() {
        this.bankAccount = new BankAccount(0);
        this.car = new Car(0);
        this.certificateOfDeposit = new CertificateOfDeposit(0);
        this.corporateBond = new CorporateBond(0);
        this.house = new House(0);
        this.junkBond = new JunkBond(0);
        this.nasdaqIndex = new NasdaqIndex(0);
        this.nyseIndex = new NyseIndex(0);
        this.savingsAccount = new SavingsAccount(0);
        this.snp500Index = new Snp500Index(0);
        this.treasuryBill = new TreasuryBill(0);
    }

    nextYear() {
        return new Assets();
    }

    asSortedArray() {
        let arr = [
            [this.getBankAccount().getId(), this.getBankAccount().getValue(), this.getBankAccount()],
            [this.getCar().getId(), this.getCar().getValue(), this.getCar()],
            [this.getCertificateOfDeposit().getId(), this.getCertificateOfDeposit().getValue(), this.getCertificateOfDeposit()],
            [this.getCorporateBond().getId(), this.getCorporateBond().getValue(), this.getCorporateBond()],
            [this.getHouse().getId(), this.getHouse().getValue(), this.getHouse()],
            [this.getJunkBond().getId(), this.getJunkBond().getValue(), this.getJunkBond()],
            [this.getNasdaqIndex().getId(), this.getNasdaqIndex().getValue(), this.getNasdaqIndex()],
            [this.getNyseIndex().getId(), this.getNyseIndex().getValue(), this.getNyseIndex()],
            [this.getSavingsAccount().getId(), this.getSavingsAccount().getValue(), this.getSavingsAccount()],
            [this.getSnp500Index().getId(), this.getSnp500Index().getValue(), this.getSnp500Index()],
            [this.getTreasuryBill().getId(), this.getTreasuryBill().getValue(), this.getTreasuryBill()]
        ];
        return arr.sort((a, b) => a[1] - b[1]).reverse();
    }

    getValue() {
        var sum = 0;
        this.asSortedArray().forEach(e => sum += e[1]);
        return sum;
    }

    getBankAccount() {
        return this.bankAccount;
    }

    getCar() {
        return this.car;
    }

    getCertificateOfDeposit() {
        return this.certificateOfDeposit;
    }

    getCorporateBond() {
        return this.corporateBond;
    }

    getHouse() {
        return this.house;
    }

    getJunkBond() {
        return this.junkBond;
    }

    getNasdaqIndex() {
        return this.nasdaqIndex;
    }

    getNyseIndex() {
        return this.nyseIndex;
    }

    getSavingsAccount() {
        return this.savingsAccount;
    }

    getSnp500Index() {
        return this.snp500Index;
    }

    getTreasuryBill() {
        return this.treasuryBill;
    }
}