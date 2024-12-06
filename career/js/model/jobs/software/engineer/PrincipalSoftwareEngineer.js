import { PRINICPAL_SOFTWARE_ENGINEER } from "./../../../../configuration/CareerConfiguration.js";
import { BaseSoftwareEngineer } from "./BaseSoftwareEngineer.js";

/** https://www.glassdoor.com/Salaries/principal-software-engineer-salary-SRCH_KO0,27.htm */
export class PrincipalSoftwareEngineer extends BaseSoftwareEngineer {
    constructor() {
        super(
            PRINICPAL_SOFTWARE_ENGINEER,
            7,
            179981,
            100000,
            50000,
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
        return new PrincipalSoftwareEngineer();
    }
}