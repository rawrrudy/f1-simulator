import { Track } from "../track/Track";
import { TrackLoader } from "../track/TrackLoader";

import { Car } from "../entities/Car";
import { drivers } from "../../data/drivers";

export class World {
  readonly width = 6000;
  readonly height = 4000;

  readonly track: Track;

  readonly cars: Car[] = [];

  constructor() {
    this.track = TrackLoader.loadBahrain();

    for (let i = 0; i < drivers.length; i++) {
      const car = new Car(drivers[i]);

      car.distance = -i * 80;

      car.speed = 185 + drivers[i].skill * 0.35;

      car.lateralOffset = (Math.random() - 0.5) * 30;

      this.cars.push(car);
    }
  }

  update(deltaTime: number) {
    for (const car of this.cars) {
      car.update(deltaTime);
    }
  }
}