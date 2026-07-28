import "./DriverStat.css";

interface DriverStatProps {
  label: string;
  value: number;
}

export function DriverStat({
  label,
  value
}: DriverStatProps) {
  return (
    <div className="driver-stat">

      <div className="driver-stat-header">

        <span>{label}</span>

        <strong>{value}</strong>

      </div>

      <div className="driver-stat-bar">

        <div
          className="driver-stat-fill"
          style={{
            width: `${value}%`,
          }}
        />

      </div>

    </div>
  );
}