import type { Vector2 } from "../../utils/Vector2";

export class Track {
  public readonly points: Vector2[];

  constructor(points: Vector2[]) {
    this.points = points;
  }

  getPosition(distance: number): Vector2 {

      const trackLength = this.points.length * 100;

      distance = 
          ((distance % trackLength) + trackLength) %
          trackLength;

      const segmentLength = 100;

      const segment = distance / segmentLength;

      const current = Math.floor(segment);

      const next = (current + 1) % this.points.length;

      const t = segment - current;

      const a = this.points[current];
      const b = this.points[next];

      return {
          x: a.x + (b.x - a.x) * t,
          y: a.y + (b.y - a.y) * t
      };
  }

  getDirection(distance: number): number {
    const trackLength = this.points.length * 100;

    distance =
        ((distance % trackLength) + trackLength) %
        trackLength;

    const segmentLength = 100;

    const segment = distance / segmentLength;

    const current = Math.floor(segment);

    const next = (current + 1) % this.points.length;

    const a = this.points[current];
    const b = this.points[next];

    return Math.atan2(
        b.y - a.y,
        b.x - a.x
    );
  }
}