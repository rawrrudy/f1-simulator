import "./DriverSelection.css";
import { useGame } from "../../state/GameContext";
import { teams } from "../../data/teams";

export function DriverSelection() {
  const { state } = useGame();

  const team = teams.find(
    (t) => t.id === state.selectedTeam
  );

  if (!team) {
    return null;
  }

  return (
    <div className="driver-selection">
      
      <div className="driver-background" />

      <div className="driver-team-header">

        <img
          className="driver-team-logo"
          src={team.logo}
          alt={team.name}
        />

        <h1>{team.name.toUpperCase()}</h1>

      </div>

      <div className="driver-layout">

        <div className="driver-left">
          <img
            className="driver-hero"
            src={team.driverImages[0]}
            alt={team.drivers[0].name}
          />
        </div>

        <div className="driver-info">

            INFO CARD 

        </div>

        <div className="driver-right">
          <img
            className="driver-hero"
            src={team.driverImages[1]}
            alt={team.drivers[1].name}
          />
        </div>

      </div>

    </div>
  );
}