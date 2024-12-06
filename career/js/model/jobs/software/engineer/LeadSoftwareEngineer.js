import { LEAD_SOFTWARE_ENGINEER } from "./../../../../configuration/CareerConfiguration.js";
import { BaseSoftwareEngineer } from "./BaseSoftwareEngineer.js";

/** https://www.salary.com/research/salary/benchmark/software-engineer-iv-salary/atlanta-ga */
export class LeadSoftwareEngineer extends BaseSoftwareEngineer {
    constructor() {
        super(
            LEAD_SOFTWARE_ENGINEER,
            5,
            140177,
            30000,
            10000,
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
        return new LeadSoftwareEngineer();
    }
}