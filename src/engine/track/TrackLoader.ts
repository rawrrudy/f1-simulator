import { Track } from "./Track";

export class TrackLoader {
  static loadBahrain(): Track {
    return new Track([
      { x: 1000, y: 1000 },
      { x: 1500, y: 900 },
      { x: 2000, y: 1200 },
      { x: 2400, y: 1700 },
      { x: 2100, y: 2400 },
      { x: 1500, y: 2700 },
      { x: 900, y: 2200 },
      { x: 700, y: 1500 },
      { x: 1000, y: 1000 },
    ])
  }
}