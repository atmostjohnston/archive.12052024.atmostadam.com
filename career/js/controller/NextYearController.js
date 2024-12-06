import {
    LAST_YEAR_SCREEN,
    JUNIOR_SOFTWARE_ENGINEER,
    SOFTWARE_ENGINEER_I,
    SOFTWARE_ENGINEER_II,
    SOFTWARE_ENGINEER_III,
    LEAD_SOFTWARE_ENGINEER,
    SENIOR_LEAD_SOFTWARE_ENGINEER,
    PRINICPAL_SOFTWARE_ENGINEER,
    SENIOR_PRINCIPAL_SOFTWARE_ENGINEER,
    DISTINGUISHED_SOFTWARE_ENGINEER,
    FELLOW_SOFTWARE_ENGINEER
} from "./../configuration/GameConfiguration.js";
import { SoftwareEngineerI } from "./../model/jobs/software/engineer/SoftwareEngineerI.js";
import { SoftwareEngineerII } from "../model/jobs/software/engineer/SoftwareEngineerII.js";
import { SoftwareEngineerIII } from "../model/jobs/software/engineer/SoftwareEngineerIII.js";
import { LeadSoftwareEngineer } from "../model/jobs/software/engineer/LeadSoftwareEngineer.js";
import { SeniorLeadSoftwareEngineer } from "../model/jobs/software/engineer/SeniorLeadSoftwareEngineer.js";
import { PrincipalSoftwareEngineer } from "../model/jobs/software/engineer/PrincipalSoftwareEngineer.js";
import { SeniorPrincipalSoftwareEngineer } from "../model/jobs/software/engineer/SeniorPrincipalSoftwareEngineer.js";
import { DistinguishedSoftwareEngineer } from "../model/jobs/software/engineer/DistinguishedSoftwareEngineer.js";
import { FellowSoftwareEngineer } from "../model/jobs/software/engineer/FellowSoftwareEngineer.js";
import { SeniorFellowSoftwareEngineer } from "../model/jobs/software/engineer/SeniorFellowSoftwareEngineer.js";
import { randomInt } from "./../function/MathFunctions.js";

export class NextYearController {
    constructor(context) {
        this.context = context;
    }

    nextYear() {
        let lastYear = this.context.getPlayer().nextYear();

        this.collectPay(lastYear.getRevenue());
        this.tryForPromotion(lastYear.getJob());

        this.context.setScreen(LAST_YEAR_SCREEN);
    }

    collectPay(oldRevenue) {
        this.context.getPlayer().getAssets().getBankAccount().setValue(
            this.context.getPlayer().getAssets().getBankAccount().getValue() +
            oldRevenue.getSalary() +
            oldRevenue.getPerformanceBonus() +
            oldRevenue.getStockOptions());
    }

    tryForPromotion(oldJob) {
        let title = null != oldJob ? oldJob.getTitle() : JUNIOR_SOFTWARE_ENGINEER;
        switch (title) {
            case JUNIOR_SOFTWARE_ENGINEER:
                if (randomInt(0, 100) <= 60) {
                    this.context.getPlayer().setJob(new SoftwareEngineerI());
                }
                break;
            case SOFTWARE_ENGINEER_I:
                if (randomInt(0, 100) <= 30) {
                    this.context.getPlayer().setJob(new SoftwareEngineerII());
                }
                break;
            case SOFTWARE_ENGINEER_II:
                if (randomInt(0, 100) <= 30) {
                    this.context.getPlayer().setJob(new SoftwareEngineerIII());
                }
                break;
            case SOFTWARE_ENGINEER_III:
                if (randomInt(0, 100) <= 30) {
                    this.context.getPlayer().setJob(new LeadSoftwareEngineer());
                }
                break;
            case LEAD_SOFTWARE_ENGINEER:
                if (randomInt(0, 100) <= 30) {
                    this.context.getPlayer().setJob(new SeniorLeadSoftwareEngineer());
                }
                break;
            case SENIOR_LEAD_SOFTWARE_ENGINEER:
                if (randomInt(0, 100) <= 30) {
                    this.context.getPlayer().setJob(new PrincipalSoftwareEngineer());
                }
                break;
            case PRINICPAL_SOFTWARE_ENGINEER:
                if (randomInt(0, 100) <= 30) {
                    this.context.getPlayer().setJob(new SeniorPrincipalSoftwareEngineer());
                }
                break;
            case SENIOR_PRINCIPAL_SOFTWARE_ENGINEER:
                if (randomInt(0, 100) <= 30) {
                    this.context.getPlayer().setJob(new DistinguishedSoftwareEngineer());
                }
                break;
            case DISTINGUISHED_SOFTWARE_ENGINEER:
                if (randomInt(0, 100) <= 30) {
                    this.context.getPlayer().setJob(new FellowSoftwareEngineer());
                }
                break;
            case FELLOW_SOFTWARE_ENGINEER:
                if (randomInt(0, 100) <= 30) {
                    this.context.getPlayer().setJob(new SeniorFellowSoftwareEngineer());
                }
                break;
            default:
                this.context.getPlayer().setJob(oldJob.nextYear());
                break;
        }
    }
}