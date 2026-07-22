import type { Vector2 } from "../../utils/Vector2";

export class PitLane {
  readonly entryDistance: number;
  readonly exitDistance: number;
  readonly path: Vector2[];
  readonly pitBoxes: Vector2[];

  constructor(
    entryDistance: number,
    exitDistance: number,
    path: Vector2[],
    pitBoxes: Vector2[]
  ) {
    this.entryDistance = entryDistance;
    this.exitDistance = exitDistance;
    this.path = path;
    this.pitBoxes = pitBoxes;
  }
}