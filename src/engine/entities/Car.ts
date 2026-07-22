import { Entity } from "./Entity";
import { Driver } from "./Driver";
import { TyreCompound } from "../tyres/TyreCompound";

export class Car extends Entity {
  readonly driver: Driver;

  distance = 0;

  baseSpeed = 0;
  speed = 0;

  trafficMultiplier = 1;
  fuelMultiplier = 1;

  fuel = 100;
  fuelCapacity = 100;
  fuelMode = 1;
  
  ersMultiplier = 1;
  weatherMultiplier = 1;

  compound: TyreCompound = TyreCompound.Medium;

  tyreWear = 100;
  tyreGrip = 1;

  lapsOnTyre = 0;

  lateralOffset = 0;
  targetLateralOffset = 0;
  preferredLateralOffset = 0;

  currentLap = 1;

  lapDistance = 0;

  lastLapTime = 0;
  currentLapTime = 0;

  bestLapTime = Infinity;

  totalRaceTime = 0;

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

    this.currentLapTime += deltaTime;
    this.totalRaceTime += deltaTime;
  }
}