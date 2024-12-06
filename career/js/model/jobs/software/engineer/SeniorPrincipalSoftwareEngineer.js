import { SENIOR_PRINCIPAL_SOFTWARE_ENGINEER } from "./../../../../configuration/CareerConfiguration.js";
import { BaseSoftwareEngineer } from "./BaseSoftwareEngineer.js";

/** https://www.glassdoor.com/Salaries/principal-software-engineer-salary-SRCH_KO0,27.htm */
export class SeniorPrincipalSoftwareEngineer extends BaseSoftwareEngineer {
    constructor() {
        super(
            SENIOR_PRINCIPAL_SOFTWARE_ENGINEER,
            8,
            200000,
            80000,
            40000,
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
        return new SeniorPrincipalSoftwareEngineer();
    }
}