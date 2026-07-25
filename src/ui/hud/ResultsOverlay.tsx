import "./styles/results.css";
import { useWorld } from "./useWorld";
import { RaceState } from "../../engine/race/RaceState";

export function ResultsOverlay() {
  const world = useWorld();

  if (!world) return null;

  if (world.raceDirector.state !== RaceState.Finished) {
    return null;
  }

  return (
    <div className="results-overlay">
      <h1>BAHRAIN GRAND PRIX</h1>

      <h2>
        {world.leaderboard[0].driver.name} WINS
      </h2>

      <div className="results-list">
        {world.leaderboard.map((car, index) => (
          <div
            key={car.driver.shortName}
            className="results-row"
          >
            <span>{index + 1}</span>

            <span>{car.driver.name}</span>

            <span>{car.currentLap} Laps</span>
          </div>
        ))}
      </div>
    </div>
  );
}