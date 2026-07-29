import { Car } from "../entities/Car";

export class FuelMechanism {
  static update(car: Car, deltaTime: number) {
    let burnRate = 0.045;
    let modeMultiplier = 1;

    switch (car.fuelMode) {
      case 0: // Save
        burnRate = 0.035;
        modeMultiplier = 0.97;
        break;

      case 1: // Balanced
        burnRate = 0.045;
        modeMultiplier = 1.00;
        break;

      case 2: // Push 
        burnRate = 0.060;
        modeMultiplier = 1.03;
        break;
    }

    car.fuel -= burnRate * deltaTime;

    if (car.fuel < 0) {
      car.fuel = 0;
    }

    // Fuel weight effect
    const fuelWeightMultiplier = 
      0.96 + 0.04 * (1 - car.fuel / car.fuelCapacity);
      
    car.fuelMultiplier =
      fuelWeightMultiplier * modeMultiplier;
  }
}