import type { Vector2 } from "../../utils/Vector2";

export class Track {
  public readonly points: Vector2[];

  private readonly segmentLengths: number[] = [];
  private readonly cumulativeLengths: number[] = [];

  public readonly totalLength: number;

  constructor(points: Vector2[]) {
    this.points = points;

    let total = 0;

    this.cumulativeLengths.push(0);

    for (let i = 0; i < points.length; i++) {
      const a = points[i];
      const b = points[(i + 1) % points.length];

      const dx = b.x - a.x;
      const dy = b.y - a.y;

      const length = Math.hypot(dx, dy);

      this.segmentLengths.push(length);

      total += length;
      this.cumulativeLengths.push(total);
    }

    this.totalLength = total;
  }

  getPosition(
    distance: number,
    lateralOffset = 0
  ): Vector2 {

    distance =
      ((distance % this.totalLength) + this.totalLength) %
      this.totalLength;

    let segment = 0;

    while (
      segment < this.segmentLengths.length - 1 &&
      distance >= this.cumulativeLengths[segment + 1]
    ) {
      segment++;
    }

    const a = this.points[segment];
    const b = this.points[(segment + 1) % this.points.length];

    const segmentStart = this.cumulativeLengths[segment];
    const segmentLength = this.segmentLengths[segment];

    const t =
      segmentLength === 0
        ? 0
        : (distance - segmentStart) / segmentLength;

    const x = a.x + (b.x - a.x) * t;
    const y = a.y + (b.y - a.y) * t;

    const dx = b.x - a.x;
    const dy = b.y - a.y;

    const len = Math.hypot(dx, dy);

    if (len === 0) {
      return { x, y };
    }

    const normalX = -dy / len;
    const normalY = dx / len;

    return {
      x: x + normalX * lateralOffset,
      y: y + normalY * lateralOffset,
    };
  }

  getDirection(distance: number): number {

    distance =
      ((distance % this.totalLength) + this.totalLength) %
      this.totalLength;

    let segment = 0;

    while (
      segment < this.segmentLengths.length - 1 &&
      distance >= this.cumulativeLengths[segment + 1]
    ) {
      segment++;
    }

    const a = this.points[segment];
    const b = this.points[(segment + 1) % this.points.length];

    return Math.atan2(
      b.y - a.y,
      b.x - a.x
    );
  }
}