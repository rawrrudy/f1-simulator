import "./TeamCard.css";

import type { Team } from "../../data/teams";

interface TeamCardProps {
  team: Team;
  selected: boolean;
  onSelect: () => void;
}

export function TeamCard({
  team,
  selected,
  onSelect,
}: TeamCardProps) {
  return (
    <button
      className={`team-card ${selected ? "selected" : ""}`}
      style={{ borderColor: team.color }}
      onClick={onSelect}
    >
      <span
        className="team-color"
        style={{ backgroundColor: team.color }}
      />

      <h2>{team.name}</h2>

      <p>
        {team.drivers[0].shortName} •{" "}
        {team.drivers[1].shortName}
      </p>
    </button>
  );
}