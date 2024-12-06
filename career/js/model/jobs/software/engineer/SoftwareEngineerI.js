import { SOFTWARE_ENGINEER_I } from "./../../../../configuration/CareerConfiguration.js";
import { BaseSoftwareEngineer } from "./BaseSoftwareEngineer.js";

/** https://www.salary.com/research/salary/benchmark/software-engineer-i-salary/atlanta-ga */
export class SoftwareEngineerI extends BaseSoftwareEngineer {
    constructor() {
        super(
            SOFTWARE_ENGINEER_I,
            2,
            76250,
            8000,
            4000,
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
        return new SoftwareEngineerI();
    }
}