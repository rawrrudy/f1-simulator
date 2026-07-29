import "./styles/hud.css";
import { TimingTower } from "./TimingTower";
import { RaceControl } from "./RaceControl";
import { TopBar } from "./TopBar";
import { TelemetryPanel } from "./TelemetryPanel";
import { StartLights } from "./StartLights";
import { StrategyPanel } from "./StrategyPanel";

export function HUD() {
  return (
    <div className="hud">
      <StartLights />
      <TopBar />
      <TimingTower />
      <TelemetryPanel />
      <RaceControl />
      <StrategyPanel />
    </div>
  );
}