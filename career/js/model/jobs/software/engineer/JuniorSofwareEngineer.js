import {
    JUNIOR_SOFTWARE_ENGINEER
} from "./../../../../configuration/CareerConfiguration.js";
import { BaseSoftwareEngineer } from "./BaseSoftwareEngineer.js";

/* https://www.salary.com/research/salary/posting/junior-programmer-salary/atlanta-ga */
export class JuniorSoftwareEngineer extends BaseSoftwareEngineer {
    constructor() {
        super(
            JUNIOR_SOFTWARE_ENGINEER,
            1,
            53594,
            2000,
            0,
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
        return new JuniorSoftwareEngineer();
    }
}