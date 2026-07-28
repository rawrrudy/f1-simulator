import "./WeatherCard.css";

interface WeatherCardProps {
  icon: string;

  title: string;

  subtitle: string;

  selected: boolean;

  onClick: () => void;
}

export function WeatherCard({
  icon,
  title,
  subtitle,
  selected,
  onClick,
}: WeatherCardProps) {
  return (
    <button
      className={`weather-card ${
        selected ? "selected" : ""
      }`}
      onClick={onClick}
    >
      <div className="weather-icon">

        {icon}

      </div>

      <h3>{title}</h3>

      <span>{subtitle}</span>

    </button>
  );
}