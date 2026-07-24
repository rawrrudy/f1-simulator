import "./styles/timing.css";

import { useWorld } from "./useWorld";
import { TimingRow } from "./components/TimingRow";

export function TimingTower() {
  const world = useWorld();

  if (!world) {
    return null;
  }

  const leader = world.leaderboard[0];

  return (
    <div className="timing-tower">
      <div className="timing-header">
        LAP {leader?.currentLap ?? 1} / 57
      </div>

      <div className="timing-list">
        {world.leaderboard.map((car, index) => {
          let gap = "LEADER";

          if (index > 0) {
            let distanceGap = leader.distance - car.distance;

            if (distanceGap < 0) {
              distanceGap += world.track.totalLength;
            }

            gap = `+${(distanceGap / leader.speed).toFixed(1)}s`;
          }

          return (
            <TimingRow
              key={car.driver.shortName}
              car={car}
              position={index + 1}
              gap={gap}
            />
          );
        })}
      </div>
    </div>
  );
}