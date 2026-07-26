import "./TeamCard.css";

import type { CSSProperties } from "react";
import type { Team } from "../../data/teams";

import { GlassCard } from "../../ui/GlassCard/GlassCard";

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
    <GlassCard
      className={`team-card ${selected ? "selected" : ""}`}
      onClick={onSelect}
      style={
        {
          "--team-color": team.color,
        } as CSSProperties
      }
    >
      <div className="team-background" />

      <div className="team-header">
        <h2>{team.name}</h2>

        <div className="logo-container">
          <img
            className="team-logo"
            src={team.logo}
            alt={team.name}
          />
        </div>
      </div>

      <div className="driver-row">
        <div className="driver-chip">
          <img
            src={team.driverImages[0]}
            alt={team.drivers[0].name}
          />

          <span>{team.drivers[0].name}</span>
        </div>

        <div className="driver-chip">
          <img
            src={team.driverImages[1]}
            alt={team.drivers[1].name}
          />

          <span>{team.drivers[1].name}</span>
        </div>
      </div>

      <div className="car-wrapper">
        <img
          className="team-car"
          src={team.carImage}
          style={{
              transform:
                  `translate(${team.carOffsetX}px,
                             ${team.carOffsetY}px)
                   scale(${team.carScale})`
          }}
        />
      </div>
    </GlassCard>
  );
}