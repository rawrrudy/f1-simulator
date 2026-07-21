import type { Vector2 } from "../../utils/Vector2";

export class Track {
    publlic readonly points: Vector2[];

    private readonly segmentLengths: number[] = [];
    private readonly cumulativeLengths: number[] = [];

    public readonly totalLength: number;

    constructor(points: Vector2[]) {
      this.points = points;

      let total = 0;

      this.cumulativeLengths.push(0);
    }
}