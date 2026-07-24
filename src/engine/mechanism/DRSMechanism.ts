import { Car } from "../entities/Car";

const DRS_RANGE = 180;
const DRS_SPEED_BOOST = 1.12;

export class DRSMechanism {
  static update(cars: Car[], trackLength: number) {
    for (const car of cars) {
      car.drsAvailable = false;
      car.drsOpen = false;
    }

    for (let i = 1; i < cars.length; i++) {
      const front = cars[i - 1];
      const back = cars[i];

      let gap = front.distance - back.distance;

      if (gap < 0) {
        gap += trackLength;
      }

      if (gap < DRS_RANGE) {
        back.drsAvailable = true;
        back.drsOpen = true;
        back.speed *= DRS_SPEED_BOOST;
      }
    }
  }
}