import { Car } from "../entities/Car";

export class LeaderboardMechanism {
  static getOrder(cars: Car[]): Car[] {
    return [...cars].sort((a, b) => {
      if (a.currentLap !== b.currentLap) {
        return b.currentLap - a.currentLap;
      }

      return b.distance - a.distance;
    });
  }
}