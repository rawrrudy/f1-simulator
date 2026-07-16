import type { Vector2 } from "../../utils/Vector2";

export class Track {
  public readonly points: Vector2[];

  constructor(points: Vector2[]) {
    this.points = points;
  }
}