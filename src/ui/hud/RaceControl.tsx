import "./styles/race-control.css";
import { useWorld } from "./useWorld";;

export function RaceControl() {
  const world = useWorld();

  if (!world) {
    return null;
  }

  const message = world.raceControl.currentMessage;

  if (!message) {
    return null;
  }

  return (
    <div className="race-control">
      <div
        className="race-control-title"
        style={{
          background: message.color,
        }}
      >
        RACE CONTROL
      </div>

      <div className="race-message">
        {message.title}
      </div>

      <div className="race-subtitle">
        {message.subtitle}
      </div>
    </div>
  );
}