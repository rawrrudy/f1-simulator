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
import { RaceControlSystem } from "../racecontrol/RaceControlSystem";
import { DRSMechanism } from "../mechanism/DRSMechanism";
import { OvertakeMechanism } from "../mechanism/OvertakeMechanism";
import { RaceDirector } from "../race/RaceDirector";
import { RaceState } from "../race/RaceState";

export class World {
  readonly width = 6000;
  readonly height = 4000;

  readonly track: Track;

  readonly cars: Car[] = [];

  readonly raceControl = new RaceControlSystem();

  readonly raceDirector = new RaceDirector();

  leaderboard: Car[] = [];

  get playerCar(): Car | undefined {
    return this.cars.find((car) => car.isPlayer)
  }

  constructor(
    trackId: string,
    selectedDriver: string
  ) {
    this.track = TrackLoader.load(trackId);
    
    const START_DISTANCE = 0;
    const ROW_SPACING = 45;
    const SIDE_OFFSET = 12;

    for (let i = 0; i < drivers.length; i++) {
      const car = new Car(drivers[i]);

      car.isPlayer =
        car.driver.name === selectedDriver;

      const row = Math.floor(i / 2);
      const isLeft = i % 2 === 0;

      car.distance = START_DISTANCE - row * ROW_SPACING;
      car.lateralOffset = isLeft ? -SIDE_OFFSET : SIDE_OFFSET;

      car.baseSpeed = 185 + drivers[i].skill * 0.35;
      car.speed = car.baseSpeed;

      this.cars.push(car);
    }

    // Initial race order
    this.leaderboard = LeaderboardMechanism.getOrder(this.cars);

    // Demo pit call
    this.cars[2].wantsToPit = true;

    this.raceControl.show(
      "BOX THIS LAP",
      this.cars[2].driver.name
    );
  }

  update(deltaTime: number) {
    // Stop simulation after the race finishes
    if (this.raceDirector.isFinished()) {
      return;
    }

    // Update race control timers
    this.raceControl.update(deltaTime);

    // Refresh current running order
    this.leaderboard = LeaderboardMechanism.getOrder(this.cars);

    // Traffic
    TrafficMechanism.update(
      this.cars,
      this.track.totalLength
    );

    OvertakeMechanism.update(
      this.leaderboard,
      this.track.totalLength
    );

    DRSMechanism.update(
      this.cars,
      this.track.totalLength
    );

    // Update each car
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

    // Resolve collisions
    CollisionMechanism.update(
      this.cars,
      this.track.totalLength
    );

    // Refresh leaderboard after movement
    this.leaderboard = LeaderboardMechanism.getOrder(this.cars);

    // Check for race finish
    const leader = this.leaderboard[0];

    if (
      leader &&
      leader.currentLap >= 57 &&
      !this.raceDirector.isFinished()
    ) {
      this.raceDirector.setState(RaceState.Finished);

      this.raceControl.show(
        "🏁 CHEQUERED FLAG",
        `${leader.driver.name} WINS`,
        "#FFFFFF"
      );
    }
  }
}