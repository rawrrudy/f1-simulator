import "./TeamSelection.css";

import { teams } from "../../data/teams";
import { TeamCard } from "../../components/TeamCard/TeamCard";
import { Screen, useGame } from "../../state/GameContext";

export function TeamSelection() {
  const { state, setState } = useGame();

  return (
    <div className="team-selection">

      <h1>SELECT YOUR TEAM</h1>

      <div className="team-grid">

        {teams.map((team) => (
          <TeamCard
            key={team.id}
            team={team}
            selected={state.selectedTeam === team.id}
            onSelect={() =>
              setState((previous) => ({
                ...previous,
                selectedTeam: team.id,
                selectedDriver: null,
              }))
            }
          />
        ))}
      </div>

      <button
        className="continue-button"
        disabled={!state.selectedTeam}
        onClick={() => {
          const team = teams.find(
            (t) => t.id === state.selectedTeam
          );

          if (!team) return;

          setState((previous) => ({
            ...previous,
            currentScreen: Screen.DriverSelection,
            selectedDriver: team.drivers[0].name,
          }));
        }}
      >
        CONTINUE
      </button>

    </div>
  );
}