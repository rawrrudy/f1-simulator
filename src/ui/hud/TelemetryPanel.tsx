import "./styles/telemetry.css";
import { useWorld } from "./useWorld";

export function TelemetryPanel() {
  const world = useWorld();

  if (!world) {
    return null;
  }

  const car = world.playerCar;

  if (!car) {
    return null;
  }

  return (
    <div className="telemetry">
      <div className="telemetry-driver">
        {car.driver.name}
      </div>

      <div className="telemetry-row">
        <span>Position</span>
        <span>
          P{world.leaderboard.indexOf(car) + 1}
        </span>
      </div>

      <div className="telemetry-row">
        <span>Tyre</span>
        <span>{car.compound}</span>
      </div>

      <div className="telemetry-row">
        <span>Wear</span>
        <span>{car.tyreWear.toFixed(0)}%</span>
      </div>

      <div className="telemetry-row">
        <span>Fuel</span>
        <span>{car.fuel.toFixed(1)} kg</span>
      </div>

      <div className="telemetry-row">
        <span>Speed</span>
        <span>{car.speed.toFixed(0)} km/h</span>
      </div>

      <div className="telemetry-row">
        <span>Lap</span>
        <span>{car.currentLap}</span>
      </div>

      <div className="telemetry-row">
        <span>Best</span>
        <span>
          {car.bestLapTime > 0
            ? car.bestLapTime.toFixed(3)
            : "--.--"}
        </span>
      </div>

      <div className="telemetry-row">
        <span>DRS</span>
        <span>
          {car.drsOpen ? "OPEN" : "OFF"}
        </span>
      </div>

      <div className="telemetry-row">
        <span>Fuel Mode</span>
        <span>
          {car.fuelMode === 0
            ? "SAVE"
            : car.fuelMode === 1
            ? "BALANCED"
            : "PUSH"}
        </span>
      </div>
    </div>
  );
}