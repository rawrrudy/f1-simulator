import "./styles/hud.css";
import { TimingTower } from "./TimingTower";
import { RaceControl } from "./RaceControl";
import { TopBar } from "./TopBar";
import { TelemetryPanel } from "./TelemetryPanel";
import { StartLights } from "./StartLights";

export function HUD() {
  return (
    <div className="hud">
      <StartLights />
      <TopBar />
      <TimingTower />
      <TelemetryPanel />
      <RaceControl />
    </div>
  );
}