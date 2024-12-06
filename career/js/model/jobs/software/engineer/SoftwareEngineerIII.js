import { SOFTWARE_ENGINEER_III } from "./../../../../configuration/CareerConfiguration.js";
import { BaseSoftwareEngineer } from "./BaseSoftwareEngineer.js";

/** https://www.salary.com/research/salary/benchmark/software-engineer-iii-salary/atlanta-ga */
export class SoftwareEngineerIII extends BaseSoftwareEngineer {
    constructor() {
        super(
            SOFTWARE_ENGINEER_III,
            4,
            120020,
            15000,
            8000,
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
        return new SoftwareEngineerIII();
    }
}