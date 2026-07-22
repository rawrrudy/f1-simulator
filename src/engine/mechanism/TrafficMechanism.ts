import { Car } from "../entities/Car";

export class TrafficMechanism {
  static update(cars: Car[], trackLength: number) {
    const SAFE_DISTANCE = 35;
    const OVERTAKE_OFFSET = 24;

    for (const car of cars) {
      let closestAhead: Car | null = null;
      let closestDistance = Infinity;

      for (const other of cars) {
        if (car === other) continue;

        let gap = other.distance - car.distance;

        if (gap < 0) {
          gap += trackLength;
        }

        if (gap > 0 && gap < closestDistance) {
          closestDistance = gap;
          closestAhead = other;
        }
      }

      if (!closestAhead) {
        car.targetLateralOffset = car.preferredLateralOffset;
        continue;
      }

      if (closestDistance < SAFE_DISTANCE) {
        if (car.preferredLateralOffset <= 0) {
          car.targetLateralOffset = -OVERTAKE_OFFSET;
        } else {
          car.targetLateralOffset = OVERTAKE_OFFSET;
        }

        if (closestDistance < 18) {
          car.trafficMultiplier = 0.85;
        } else {
          car.trafficMultiplier = 1;
        }

      } else {

        car.targetLateralOffset = car.preferredLateralOffset;
        car.trafficMultiplier = 1;
      }
    }
  }
}