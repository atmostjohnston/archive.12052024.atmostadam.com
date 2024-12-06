import { FELLOW_SOFTWARE_ENGINEER } from "./../../../../configuration/CareerConfiguration.js";
import { BaseSoftwareEngineer } from "./BaseSoftwareEngineer.js";

/** From Google Career Framework. */
export class FellowSoftwareEngineer extends BaseSoftwareEngineer {
    constructor() {
        super(
            FELLOW_SOFTWARE_ENGINEER,
            10,
            1000000,
            1000000,
            10000000,
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
        return new FellowSoftwareEngineer();
    }
}