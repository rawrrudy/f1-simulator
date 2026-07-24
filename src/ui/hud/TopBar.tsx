import "./styles/top-bar.css";
import { useWorld } from "./useWorld";

export function TopBar() {
  const world = useWorld();

  if (!world) {
    return null;
  }

  const leader = world.leaderboard[0];

  return (
    <div className="top-bar">
      <div className="gp-name">
        BAHRAIN GRAND PRIX
      </div>

      <div className="lap-counter">
        LAP {leader?.currentLap ?? 1} / 57
      </div>

      <div className="flag-status green">
        GREEN FLAG 
      </div>
    </div>
  );
}