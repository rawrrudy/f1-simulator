import { Track } from "../track/Track";
import { TrackLoader } from "../track/TrackLoader";

export class World {
  readonly width = 6000;
  readonly height = 4000;

  readonly track: Track;

  constructor() {
    this.track = TrackLoader.loadBahrain();
  }
}