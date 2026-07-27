import "./DriverInfoCard.css";

interface DriverInfoCardProps {
  driver: {
    name: string;
    overall: number;
    pace: number;
    qualifying: number;
    tyreManagement: number;
    consistency: number;
    aggression: number;
    description: string;
  };
}

export function DriverInfoCard({
  driver,
}: DriverInfoCardProps) {

  return (

    <div className="driver-info-card">
    
      <div className="driver-name">

        <span className="driver-first-name">
          {driver.name.split(" ")[0]}
        </span>

        <span className="driver-last-name">
          {driver.name.split(" ")[1].toUpperCase()}
        </span>

      </div>

      <div className="driver-overall">

        <span>OVERALL</span>

        <strong>{driver.overall}</strong>

      </div>

      <div className="driver-description">

        {driver.description}

      </div>

    </div>
    
  );
}