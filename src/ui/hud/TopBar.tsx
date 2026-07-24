import "./styles/top-bar.css";
import { useWorld } from "./useWorld";
import { RaceState } from "../../engine/race/RaceState";

export function TopBar() {
  const world = useWorld();

  if (!world) {
    return null;
  }

  const leader = world.leaderboard[0];

  const state = world.raceDirector.state;

  let label = "GREEN FLAG";
  let className = "flag-status green";

  switch (state) {
    case RaceState.Yellow:
      label = "YELLOW FLAG";
      className = "flag-status yellow";
      break;

    case RaceState.SafetyCar:
      label = "SAFETY CAR";
      className = "flag-status yellow";
      break;

    case RaceState.VirtualSafetyCar:
      label = "VIRTUAL SAFETY CAR";
      className = "flag-status yellow";
      break;

    case RaceState.RedFlag:
      label = "RED FLAG";
      className = "flag-status red";
      break;

    case RaceState.Finished:
      label = "CHEQUERED FLAG";
      className = "flag-status checker";
      break;

    case RaceState.Green:
    default:
      label = "GREEN FLAG";
      className = "flag-status green";
      break;
  }

  return (
    <div className="top-bar">
      <div className="gp-name">
        BAHRAIN GRAND PRIX
      </div>

      <div className="lap-counter">
        LAP {leader?.currentLap ?? 1} / 57
      </div>

      <div className={className}>
        {label}
      </div>
    </div>
  );
}