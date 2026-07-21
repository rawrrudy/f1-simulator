import { Car } from "../entities/Car";

export class TrafficMechanism {
  static update(cars: Car[]) {
    const SAFE_DISTANCE = 35;
    const OVERTAKE_OFFSET = 24;

    for (const car of cars) {
      let closestAhead: Car | null = null;
      let closestDistance = Infinity;

      for (const other of cars) {
        if (car === other) continue;

        const gap = other.distance - car.distance;

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
      } else {
        car.targetLateralOffset = car.preferredLateralOffset;
      }
    }
  }
}