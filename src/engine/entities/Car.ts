import { Entity } from "./Entity";
import { Driver } from "./Driver";

export class Car extends Entity {
  readonly driver: Driver;

  distance = 0;

  speed = 0;

  lateralOffset = 0;

  constructor(driver: Driver) {
    super();

    this.driver = driver;
  }

  update(deltaTime: number) {
    this.distance += this.speed * deltaTime;
  }
  
}