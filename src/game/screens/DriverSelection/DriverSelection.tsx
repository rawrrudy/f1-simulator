import "./DriverSelection.css";
import { useGame } from "../../state/GameContext";
import { teams } from "../../data/teams";
import type React from "react";

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
      
      <div
        className="driver-background"
        style={
          {
            "--team-color": team.color,
          } as React.CSSProperties
        }
      />

      <img
        className="driver-background-logo"
        src={team.logo}
        alt=""
        aria-hidden="true"
      />

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

          <div className="driver-spotlight" />

          <img
            className="driver-hero"
            src={team.driverHeroes[0]}
            alt={team.drivers[0].name}
            style={{
              transform: `
                translate(
                  ${team.driverHeroOffsetX[0]}px,
                  ${team.driverHeroOffsetY[0]}px
                )
                scale(${team.driverHeroScale[0]})
              `,
            }}
          />
        </div>

        <div className="driver-info">

            INFO CARD 

        </div>

        <div className="driver-right">

          <div className="driver-spotlight" />

          <img
            className="driver-hero"
            src={team.driverHeroes[1]}
            alt={team.drivers[1].name}
            style={{
              transform: `
                translate(
                  ${team.driverHeroOffsetX[1]}px,
                  ${team.driverHeroOffsetY[1]}px
                )
                scale(${team.driverHeroScale[1]})
              `,
            }}
          />
        </div>

      </div>

    </div>
  );
}