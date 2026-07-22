import { Car } from "../entities/Car";
import { TyreCompound } from "./TyreCompound";

export class TyreMechanism {
  static update(car: Car, deltaTime: number) {
    let wearRate = 0;

    switch (car.compound) {
      case TyreCompound.Soft:
        wearRate = 2.4;
        break;

      case TyreCompound.Medium:
        wearRate = 1.6;
        break;

      case TyreCompound.Hard:
        wearRate = 1.1;
        break;
    }

    car.tyreWear -= wearRate * deltaTime;

    if (car.tyreWear < 0) {
      car.tyreWear = 0;
    }

    car.tyreGrip = 0.7 + (car.tyreWear / 100) * 0.3;

    car.speed =
        car.baseSpeed *
        car.tyreGrip *
        car.trafficMultiplier *
        car.fuelMultiplier *
        car.ersMultiplier *
        car.weatherMultiplier;
  }
}