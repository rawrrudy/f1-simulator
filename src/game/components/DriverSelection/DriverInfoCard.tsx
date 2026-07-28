import "./DriverInfoCard.css";
import { DriverStat } from "./DriverStat";

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

  teamColor: string;

}

export function DriverInfoCard({
  driver,
  teamColor,
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

      <div className="driver-stats">

          <DriverStat
              label="Race Pace"
              value={driver.pace}
              color={teamColor}
          />

          <DriverStat
              label="Qualifying"
              value={driver.qualifying}
              color={teamColor}
          />

          <DriverStat
              label="Tyre Management"
              value={driver.tyreManagement}
              color={teamColor}
          />

          <DriverStat
              label="Consistency"
              value={driver.consistency}
              color={teamColor}
          />

          <DriverStat
              label="Aggression"
              value={driver.aggression}
              color={teamColor}
          />

      </div>

      <div className="driver-description">

        {driver.description}

      </div>

    </div>
    
  );
}