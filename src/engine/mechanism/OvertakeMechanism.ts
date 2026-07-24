import { Car } from "../entities/Car";

const ATTACK_RANGE = 140;
const ATTACK_DURATION = 1.8;

export class OvertakeMechanism {
  static update(cars: Car[], trackLength: number) {
    for (let i = 1; i < cars.length; i++) {
      const front = cars[i - 1];
      const back = cars[i];

      let gap = front.distance - back.distance;

      if (gap < 0) {
        gap += trackLength;
      }

      if (
        gap < ATTACK_RANGE &&
        back.speed > front.speed
      ) {
        back.isAttacking = true;
        front.isDefending = true;

        back.attackTimer = ATTACK_DURATION;
      }
    }

    for (const car of cars) {
      if (car.attackTimer > 0) {
        car.attackTimer -= 1 / 60;

        car.targetLateralOffset =
          car.preferredLateralOffset + 32;

        car.speed *= 1.04;
      } else {
        car.isAttacking = false;
        car.isDefending = false;
      }
    }
  }
}
