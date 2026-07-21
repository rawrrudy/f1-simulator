import { Track } from "./Track";
import { Bahrain } from "../../tracks/Bahrain";

export class TrackLoader {
  static loadBahrain(): Track {
    return new Track(Bahrain.points);
  }
}