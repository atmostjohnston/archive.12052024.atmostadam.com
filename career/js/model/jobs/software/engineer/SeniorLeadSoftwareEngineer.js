import { SENIOR_LEAD_SOFTWARE_ENGINEER } from "./../../../../configuration/CareerConfiguration.js";
import { BaseSoftwareEngineer } from "./BaseSoftwareEngineer.js";

/** https://www.salary.com/research/salary/benchmark/software-engineer-v-salary/atlanta-ga */
export class SeniorLeadSoftwareEngineer extends BaseSoftwareEngineer {
    constructor() {
        super(
            SENIOR_LEAD_SOFTWARE_ENGINEER,
            6,
            165513,
            40000,
            20000,
            [
                "• Learns - Software and Analysis Design",
                "• Learns - Software Methodologies, Meetings, Standups",
                "• Junior - Writes and Debugs Basic Software Code",
                "• Junior - Basic Software Unit Testing",
                "• Junior- Basic Software Troubleshooting",
                "• Reports To - Lead or Senior Software Engineer",
                "• Qualifications - Associate of Computer Science"
            ]
        );
    }

    nextYear() {
        return new SeniorLeadSoftwareEngineer();
    }
}