import "./styles/timing.css";

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

            <div className="driver">
              {driver}
            </div>

            <div className="gap">
              {index === 0 ? "" : "+0.000"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}