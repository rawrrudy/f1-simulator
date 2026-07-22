import { Car } from "../entities/Car";
import { CarState } from "../entities/CarState";

export class PitMechanism {
  static update(car: Car, deltaTime: number) {

    switch (car.state) {
      
      case CarState.Racing:
        if (car.wantsToPit) {
          car.state = CarState.PitEntry;
        }
        break;

      case CarState.PitEntry:
        car.state = CarState.PitEntry;
        break;

      case CarState.PitLane:
        car.pitTimer += deltaTime;

        if (car.pitTimer > 2) {
          car.state = CarState.PitBox;
          car.pitTimer = 0;
        }

        break;

      case CarState.PitBox:
        car.speed = 0;
        car.pitTimer += deltaTime;

        if (car.pitTimer > 2.5) {
          
          car.tyreWear = 100;
          car.lapsOnTyre = 0;

          car.state = CarState.PitExit;

          car.pitTimer = 0;
        }

        break;

      case CarState.PitExit:
        car.state = CarState.Racing;
        car.wantsToPit = false;
        break;
    }
  }
}