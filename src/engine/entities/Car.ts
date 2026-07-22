import { Entity } from "./Entity";
import { Driver } from "./Driver";

export class Car extends Entity {
  readonly driver: Driver;

  distance = 0;

  baseSpeed = 0;
  speed = 0;

  lateralOffset = 0;
  targetLateralOffset = 0;
  preferredLateralOffset = 0;

  constructor(driver: Driver) {
    super();

    this.driver = driver;
  }

  update(deltaTime: number) {
    const STEER_SPEED = 5;

    this.lateralOffset +=
      (this.targetLateralOffset - this.lateralOffset) *
      STEER_SPEED *
      deltaTime;

    this.distance += this.speed * deltaTime;
  }
}