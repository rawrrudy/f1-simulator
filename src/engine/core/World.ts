import { Track } from "../track/Track";
import { TrackLoader } from "../track/TrackLoader";

import { Car } from "../entities/Car";
import { Driver } from "../entities/Driver";

export class World {
  readonly width = 6000;
  readonly height = 4000;

  readonly track: Track;

  readonly cars: Car[] = [];

  constructor() {
    this.track = TrackLoader.loadBahrain();

    this.cars.push(
      new Car(
        new Driver(
          "Max Verstappen",
          99,
          98,
          96
        )
      )
    );

    this.cars[0].x = 1000;
    this.cars[0].y = 1000;

    this.cars[0].speed = 200;
  }

  update(deltaTime: number) {
    for (const car of this.cars) {
      car.update(deltaTime);
    }
  }
}