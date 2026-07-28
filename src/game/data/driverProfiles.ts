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

  "Max Verstappen": {
    overall: 99,
    racePace: 99,
    qualifying: 99,
    tyreManagement: 98,
    consistency: 99,
    aggression: 98,
    description:
      "The benchmark of modern Formula 1. Exceptional speed, relentless consistency and supreme racecraft.",
  },

  "Sergio Perez": {
    overall: 92,
    racePace: 92,
    qualifying: 89,
    tyreManagement: 95,
    consistency: 91,
    aggression: 88,
    description:
      "A tyre management specialist renowned for strategic race execution and calm under pressure.",
  },

  "Lando Norris": {
    overall: 97,
    racePace: 97,
    qualifying: 97,
    tyreManagement: 96,
    consistency: 97,
    aggression: 94,
    description:
      "Blistering pace combined with remarkable consistency makes him one of the sport's elite contenders.",
  },

  "Oscar Piastri": {
    overall: 96,
    racePace: 96,
    qualifying: 96,
    tyreManagement: 95,
    consistency: 96,
    aggression: 92,
    description:
      "Calm, clinical and incredibly composed. Rarely wastes opportunities when they appear.",
  },

  "Charles Leclerc": {
    overall: 97,
    racePace: 96,
    qualifying: 99,
    tyreManagement: 94,
    consistency: 95,
    aggression: 90,
    description:
      "One of Formula 1's fastest qualifiers with exceptional precision over a single lap.",
  },

  "Lewis Hamilton": {
    overall: 99,
    racePace: 99,
    qualifying: 98,
    tyreManagement: 99,
    consistency: 98,
    aggression: 88,
    description:
      "A seven-time World Champion renowned for racecraft, consistency and tyre preservation.",
  },

  "George Russell": {
    overall: 95,
    racePace: 95,
    qualifying: 96,
    tyreManagement: 93,
    consistency: 95,
    aggression: 92,
    description:
      "Highly analytical and consistently fast across qualifying and race conditions.",
  },

  "Kimi Antonelli": {
    overall: 98,
    racePace: 97,
    qualifying: 99,
    tyreManagement: 87,
    consistency: 96,
    aggression: 93,
    description:
      "A phenomenal young talent with fearless speed and enormous long-term potential.",
  },

  "Fernando Alonso": {
    overall: 96,
    racePace: 95,
    qualifying: 95,
    tyreManagement: 99,
    consistency: 98,
    aggression: 91,
    description:
      "One of the greatest racing minds in Formula 1 history, combining experience with relentless determination.",
  },

  "Lance Stroll": {
    overall: 86,
    racePace: 86,
    qualifying: 84,
    tyreManagement: 86,
    consistency: 84,
    aggression: 86,
    description:
      "Capable of delivering strong performances when conditions become unpredictable.",
  },

  "Pierre Gasly": {
    overall: 90,
    racePace: 91,
    qualifying: 90,
    tyreManagement: 89,
    consistency: 90,
    aggression: 91,
    description:
      "Quick, aggressive and capable of extracting impressive performances from midfield machinery.",
  },

  "Franco Colapinto": {
    overall: 87,
    racePace: 87,
    qualifying: 87,
    tyreManagement: 85,
    consistency: 86,
    aggression: 91,
    description:
      "A fearless rookie eager to prove himself against Formula 1's established stars.",
  },

  "Yuki Tsunoda": {
    overall: 91,
    racePace: 91,
    qualifying: 91,
    tyreManagement: 89,
    consistency: 89,
    aggression: 95,
    description:
      "Explosive pace and fearless overtaking make him one of the grid's most exciting racers.",
  },

  "Isack Hadjar": {
    overall: 89,
    racePace: 89,
    qualifying: 90,
    tyreManagement: 87,
    consistency: 88,
    aggression: 92,
    description:
      "Fast, confident and eager to establish himself in Formula 1 with bold performances.",
  },

  "Esteban Ocon": {
    overall: 90,
    racePace: 90,
    qualifying: 90,
    tyreManagement: 89,
    consistency: 90,
    aggression: 89,
    description:
      "A dependable competitor who consistently extracts the maximum from every opportunity.",
  },

  "Oliver Bearman": {
    overall: 93,
    racePace: 89,
    qualifying: 92,
    tyreManagement: 90,
    consistency: 89,
    aggression: 92,
    description:
      "One of Formula 1's brightest prospects with impressive maturity beyond his years.",
  },

  "Alex Albon": {
    overall: 93,
    racePace: 93,
    qualifying: 93,
    tyreManagement: 92,
    consistency: 93,
    aggression: 90,
    description:
      "An outstanding all-rounder capable of consistently outperforming expectations.",
  },

  "Carlos Sainz": {
    overall: 95,
    racePace: 95,
    qualifying: 94,
    tyreManagement: 96,
    consistency: 96,
    aggression: 90,
    description:
      "Methodical, intelligent and exceptionally consistent over an entire Grand Prix distance.",
  },

  "Nico Hulkenberg": {
    overall: 91,
    racePace: 91,
    qualifying: 91,
    tyreManagement: 91,
    consistency: 92,
    aggression: 88,
    description:
      "An experienced veteran known for extracting impressive pace and making very few mistakes.",
  },

  "Gabriel Bortoleto": {
    overall: 88,
    racePace: 88,
    qualifying: 89,
    tyreManagement: 87,
    consistency: 88,
    aggression: 90,
    description:
      "A highly rated rookie combining raw speed with intelligent race management.",
  },

};