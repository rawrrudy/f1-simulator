import { Track } from "./Track";

import { Bahrain } from "../../tracks/Bahrain";
import { Monaco } from "../../tracks/Monaco";
import { Silverstone } from "../../tracks/Silverstone";

export class TrackLoader {

  static load(trackId: string): Track {

    switch (trackId) {

      case "monaco":
        return new Track(Monaco.points);

      case "silverstone":
        return new Track(Silverstone.points);

      case "bahrain":
      default:
        return new Track(Bahrain.points);
    }
  }
}