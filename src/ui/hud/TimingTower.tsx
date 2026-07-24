import "./styles/timing.css";
import { TeamColors } from "./TeamColors";
import { useWorld } from "./useWorld";

export function TimingTower() {
  const world = useWorld();

  if (!world) {
    return null;
  }

  return (
    <div className="timing-tower">
      <div className="timing-header">
        LAP {world.leaderboard[0]?.currentLap ?? 1} / 57
      </div>

      <div className="timing-list">
        {world.leaderboard.map((car, index) => (
          <div
            key={car.driver.name}
            className="timing-row"
          >
            <div className="position">
              {index + 1}
            </div>

            <div 
              className="team-strip"
              style={{
                background: TeamColors[car.driver.shortName],
              }}
            />

            <div
              className="driver"
              style={{
                color: index === 0 ? "#FFFFFF" : "#ECECEC",
              }}
            >
              {car.driver.shortName}
            </div>

            <div className="gap">
              {index === 0
                ? "LEADER"
                : `+${(
                    (world.leaderboard[0].distance - car.distance) / 
                    200
                ).toFixed(3)}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}