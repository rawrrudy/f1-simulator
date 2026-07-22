import { Car } from "../entities/Car";

export class FuelMechanism {
  static update(car: Car, deltaTime: number) {
    let burnRate = 0.045;

    switch (car.fuelMode) {
      case 0: // save
        burnRate = 0.035;
        break;

      case 1: // normal
        burnRate = 0.045;
        break;

      case 2: // push
        burnRate = 0.060;
        break;
    }

    car.fuel -= burnRate * deltaTime;

    if (car.fuel < 0) {
      car.fuel = 0;
    }

    car.fuelMultiplier = 0.96 + 0.04 * (1 - car.fuel / car.fuelCapacity);
  }
}