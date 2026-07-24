import "./styles/hud.css";
import { TimingTower } from "./TimingTower";
import { RaceControl } from "./RaceControl";

export function HUD() {
  return (
    <div className="hud">
      <TimingTower />
      <RaceControl />
    </div>
  );
}