import "./styles/hud.css";
import { TimingTower } from "./TimingTower";
import { RaceControl } from "./RaceControl";
import { TopBar } from "./TopBar";

export function HUD() {
  return (
    <div className="hud">
      <TopBar />
      <TimingTower />
      <RaceControl />
    </div>
  );
}