import { Track } from "../track/Track";
import { TrackLoader } from "../track/TrackLoader";

import { Car } from "../entities/Car";
import { drivers } from "../../data/drivers";
import { PitMechanism } from "../mechanism/PitMechanism";
import { TrafficMechanism } from "../mechanism/TrafficMechanism";
import { CollisionMechanism } from "../mechanism/CollisionMechanism";
import { TyreMechanism } from "../tyres/TyreMechanism";
import { LapMechanism } from "../mechanism/LapMechanism";
import { LeaderboardMechanism } from "../mechanism/LeaderboardMechanism";
import { FuelMechanism } from "../mechanism/FuelMechanism";

export class World {
  readonly width = 6000;
  readonly height = 4000;

  readonly track: Track;

  readonly cars: Car[] = [];

  leaderboard: Car[] = [];

  constructor() {
    this.track = TrackLoader.loadBahrain();

    const START_DISTANCE = 0;
    const ROW_SPACING = 45;
    const SIDE_OFFSET = 12;

    for (let i = 0; i < drivers.length; i++) {
      const car = new Car(drivers[i]);

      const row = Math.floor(i / 2);
      const isLeft = i % 2 === 0;

      car.distance = START_DISTANCE - row * ROW_SPACING;
      car.lateralOffset = isLeft ? -SIDE_OFFSET : SIDE_OFFSET;

      car.baseSpeed = 185 + drivers[i].skill * 0.35;
      car.speed = car.baseSpeed;

      this.cars.push(car);
    }

    this.cars[2].wantsToPit = true;
    
  }

  update(deltaTime: number) {
    TrafficMechanism.update(this.cars, this.track.totalLength);

    for (const car of this.cars) {

        PitMechanism.update(car, deltaTime);

        FuelMechanism.update(car, deltaTime);

        TyreMechanism.update(car, deltaTime);

        car.update(deltaTime);

        LapMechanism.update(
          car,
          this.track.totalLength
        );
    }

    CollisionMechanism.update(
      this.cars,
      this.track.totalLength
    );

    this.leaderboard = LeaderboardMechanism.getOrder(this.cars);

    console.log(
      this.cars[2].driver.name,
      this.cars[2].state,
      this.cars[2].pitTimer.toFixed(2),
      this.cars[2].tyreWear.toFixed(1)
    );
  }
}