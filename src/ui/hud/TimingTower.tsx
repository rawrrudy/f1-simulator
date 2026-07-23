import "./styles/timing.css";
import { TeamColors } from "./TeamColors";

const rows = [
  "VER",
  "NOR",
  "PIA",
  "LEC",
  "RUS",
  "ANT",
  "HAM",
  "HAD",
  "ALB",
  "BEA",
  "ALO",
  "TSU",
  "GAS",
  "DOO",
  "HUL",
  "SAI",
  "LAW",
  "OCO",
  "BOR",
  "STR",
];

export function TimingTower() {
  return (
    <div className="timing-tower">
      <div className="timing-header">
        LAP 1 / 57
      </div>

      <div className="timing-list">
        {rows.map((driver, index) => (
          <div
            key={driver}
            className="timing-row"
          >
            <div className="position">
              {index + 1}
            </div>

            <div
              className="team-strip"
              style={{
                background: TeamColors[driver],
              }}
            />

            <div
              className="driver"
              style={{
                color: index === 0 ? "#FFFFFF" : "#ECECEC",
              }}
            >
              {driver}
            </div>

            <div className="gap">
              {
                index === 0
                  ? "LEADER"
                  : `+${(index * 0.842).toFixed(3)}`
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}