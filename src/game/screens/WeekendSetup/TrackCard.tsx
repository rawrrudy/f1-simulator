import "./TrackCard.css";
import type { TrackInfo } from "../../data/tracks";

interface TrackCardProps {
  track: TrackInfo;

  selected: boolean;

  onClick: () => void;
}

export function TrackCard({
  track,
  selected,
  onClick,
}: TrackCardProps) {
  return (
    <button
      className={`track-card ${
        selected ? "selected" : ""
      }`}
      onClick={onClick}
    >
      <div className="track-card-top">

        <h3>{track.name.toUpperCase()}</h3>

        <span>{track.country}</span>

      </div>

      <div className="track-outline">

        <img
          src={track.outline}
          alt={track.name}
        />

      </div>

      <div className="track-divider"/>

      <div className="track-details">

        <div>

          <span>Length</span>

          <strong>{track.length}</strong>

        </div>

        <div>

          <span>Laps</span>

          <strong>{track.laps}</strong>

        </div>

        <div>

          <span>DRS</span>

          <strong>{track.drsZones}</strong>

        </div>

        <div>

          <span>Race</span>

          <strong>{track.timeOfDay}</strong>

        </div>

      </div>

    </button>
  );
}