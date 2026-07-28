import "./DriverStat.css";

interface DriverStatProps {
  label: string;
  value: number;
  color: string;
}

export function DriverStat({
  label,
  value,
  color,
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
            background: `linear-gradient(90deg, ${color}, white)`,
          }}
        />

      </div>

    </div>
  );
}