import { Car } from "../entities/Car";

export class LapMechanism {
  static update(car: Car, trackLength: number) {
    while (car.distance >= trackLength) {
      car.distance -= trackLength;

      car.currentLap++;

      car.lastLapTime = car.currentLapTime;

      if (car.lastLapTime < car.bestLapTime) {
        car.bestLapTime = car.lastLapTime;
      }

      car.currentLapTime = 0;

      car.lapsOnTyre++;
    }

    car.lapDistance = car.distance;
  }
}