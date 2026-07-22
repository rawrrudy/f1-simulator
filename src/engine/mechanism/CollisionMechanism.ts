import { Car } from "../entities/Car";

export class CollisionMechanism {
  static update(cars: Car[], trackLength: number) {
    const MIN_GAP = 12;

    const orderedCars = [...cars].sort(
      (a, b) => a.distance - b.distance
    );

    for (let i = 0; i < orderedCars.length; i++) {
      const front = orderedCars[(i + 1) % orderedCars.length];
      const back = orderedCars[i];

      let gap = front.distance - back.distance;

      if (gap <= 0) {
        gap += trackLength;
      }

      if (gap < MIN_GAP) {
        back.distance = front.distance - MIN_GAP;

        if (back.distance < 0) {
          back.distance += trackLength;
        }

        back.speed = Math.min(back.speed, front.speed);
      }
    }
  }
}