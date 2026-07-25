import "./TeamSelection.css";

import { teams } from "../../data/teams";
import { Screen, useGame } from "../../state/GameContext";

export function TeamSelection() {
  const { state, setState } = useGame();

  return (
    <div className="team-selection">

      <h1>Choose Your Team</h1>

      <div className="team-grid">

        {teams.map((team) => (
          <button
            key={team.id}
            className={
              state.selectedTeam === team.id
                ? "team-card selected"
                : "team-card"
            }
            style={{
              borderColor: team.color,
            }}
            onClick={() =>
              setState((previous) => ({
                ...previous,
                selectedTeam: team.id,
              }))
            }
          >
            <span
              className="team-color"
              style={{
                background: team.color,
              }}
            />

            <h2>{team.name}</h2>

            <p>
              {team.drivers[0].shortName} •{" "}
              {team.drivers[1].shortName} 
            </p>
          </button>
        ))}
      </div>

      <button
        className="continue-button"
        disabled={!state.selectedTeam}
        onClick={() =>
          setState((previous) => ({
            ...previous,
            currentScreen: Screen.DriverSelection,
          }))
        }
      >
        CONTINUE
      </button>

    </div>
  );
}