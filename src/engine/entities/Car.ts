import { Entity } from "./Entity";
import { Driver } from "./Driver";
import { TyreCompound } from "../tyres/TyreCompound";
import { CarState } from "./CarState";
import { Sprite } from "../../rendering/Sprite";

import ferrari from "../../assets/images/ferrarif1.png";
import redbull from "../../assets/images/redbullf1.png";
import mercedes from "../../assets/images/mercedesf1.png";
import mclaren from "../../assets/images/mclaren.png";
import astonMartin from "../../assets/images/astonmartinf1.png";
import alpine from "../../assets/images/alpinef1.png";
import racingBulls from "../../assets/images/racingbullsf1.png";
import williams from "../../assets/images/williamsf1.png";
import haas from "../../assets/images/haasf1.png";
import sauber from "../../assets/images/sauberf1.png";

export class Car extends Entity {
  readonly driver: Driver;

  readonly sprite: Sprite;

  distance = 0;

  baseSpeed = 0;
  speed = 0;

  trafficMultiplier = 1;
  fuelMultiplier = 1;

  fuel = 100;
  fuelCapacity = 100;
  fuelMode = 1;

  state: CarState = CarState.Racing;

  pitTimer = 0;

  wantsToPit = false;

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

  drsAvailable = false;
  drsOpen = false;

  isAttacking = false;
  isDefending = false;

  attackTimer = 0;

  isPlayer = false;

  constructor(driver: Driver) {
    super();

    this.driver = driver;

    const spriteMap: Record<string, string> = {
      "Ferrari": ferrari,
      "Red Bull": redbull,
      "Mercedes": mercedes,
      "McLaren": mclaren,
      "Aston Martin": astonMartin,
      "Alpine": alpine,
      "Racing Bulls": racingBulls,
      "Williams": williams,
      "Haas": haas,
      "Sauber": sauber,
    };

    this.sprite = new Sprite(spriteMap[this.driver.team]);
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