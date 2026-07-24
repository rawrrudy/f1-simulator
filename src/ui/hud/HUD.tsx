import "./styles/hud.css";
import { TimingTower } from "./TimingTower";
import { RaceControl } from "./RaceControl";
import { TopBar } from "./TopBar";
import { TelemetryPanel } from "./TelemetryPanel";

export function HUD() {
  return (
    <div className="hud">
      <TopBar />
      <TimingTower />
      <TelemetryPanel />
      <RaceControl />
    </div>
  );
}