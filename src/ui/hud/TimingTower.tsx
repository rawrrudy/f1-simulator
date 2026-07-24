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
          const gap =
            index === 0
              ? "LEADER"
              : `+${(
                  (leader.distance - car.distance) /
                  200
                ).toFixed(3)}`;

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