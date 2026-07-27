export interface DriverProfile {

    overall: number;

    racePace: number;

    qualifying: number;

    tyreManagement: number;

    consistency: number;

    aggression: number;

    description: string;

}

export const driverProfiles: Record<string, DriverProfile> = {

    "Charles Leclerc": {

        overall: 97,

        racePace: 96,

        qualifying: 99,

        tyreManagement: 94,

        consistency: 95,

        aggression: 90,

        description:
            "One of F1's fastest qualifier with exceptional precision over a single lap."
    
    },

    "Lewis Hamilton": {

        overall: 99,

        racePace: 98,

        qualifying: 97,

        tyreManagement: 99,

        consistency: 98,

        aggression: 88,

        description:
            "A seven time World Champion renowned for racecraft, consistency and tyre preservation."
    
    }

};