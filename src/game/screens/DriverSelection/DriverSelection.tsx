import "./DriverSelection.css";
import { useGame, Screen } from "../../state/GameContext";
import { teams } from "../../data/teams";
import type React from "react";
import { driverProfiles } from "../../data/driverProfiles";
import { DriverInfoCard } from "../../components/DriverSelection/DriverInfoCard";

export function DriverSelection() {
  const { state, setState } = useGame();

  const team = teams.find(
    (t) => t.id === state.selectedTeam
  );

  if (!team) {
    return null;
  }

  const selectedDriver =
    team.drivers.find(
      (driver) => driver.name === state.selectedDriver
    ) ?? team.drivers[0];

  const profile = driverProfiles[selectedDriver.name];

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

        <div
          className={`driver-left ${
            selectedDriver.name === team.drivers[0].name
              ? "selected"
              : ""
          }`}
          onClick={() =>
            setState((previous) => ({
              ...previous,
              selectedDriver: team.drivers[0].name,
            }))
          }
        >

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
          <DriverInfoCard
              driver={{
                  name: selectedDriver.name,
                  overall: profile.overall,
                  pace: profile.racePace,
                  qualifying: profile.qualifying,
                  tyreManagement: profile.tyreManagement,
                  consistency: profile.consistency,
                  aggression: profile.aggression,
                  description: profile.description,
              }}
              teamColor={team.color}
          />

          <button
            className="driver-continue-button"
            onClick={() =>
                setState(previous => ({
                  ...previous,
                  currentScreen: Screen.WeekendSetup,
                }))
            }
          >
            CONTINUE
          </button>
        </div>

        <div
          className={`driver-right ${
            selectedDriver.name === team.drivers[1].name
              ? "selected"
              : ""
          }`}
          onClick={() =>
            setState((previous) => ({
              ...previous,
              selectedDriver: team.drivers[1].name,
            }))
          }
        >

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