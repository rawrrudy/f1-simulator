import "./TrackCard.css";

interface TrackCardProps {
  name: string;
  length: string;
  laps: number;
  drsZones: number;
  outline: string;

  selected: boolean;

  onClick: () => void;
}

export function TrackCard({
  name,
  length,
  laps,
  drsZones,
  outline,
  selected,
  onClick,
}: TrackCardProps) {
  return (
    <button
      className={`track-card ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      <div className="track-card-header">

        <h3>{name}</h3>

      </div>

      <div className="track-outline">

        <img
          src={outline}
          alt={name}
        />

      </div>

      <div className="track-meta">

        <div>
          
          <span>Length</span>

          <strong>{length}</strong>

        </div>

        <div>

          <span>Laps</span>

          <strong>{laps}</strong>

        </div>

        <div>

          <span>DRS</span>

          <strong>{drsZones}</strong>

        </div>

      </div>

    </button>
  );
}