import type { TrackPoint } from "./TrackPoint";

export class Track {
  public readonly points: TrackPoint[];

  constructor(points: TrackPoint[]) {
    this.points = points;
  }
}