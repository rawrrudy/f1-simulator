import "./styles/hud.css";
import { TimingTower } from "./TimingTower";

export function HUD() {
  return (
    <div className="hud">
      <TimingTower />
    </div>
  );
}