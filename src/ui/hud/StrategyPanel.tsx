import { engineStore } from "../../engine/core/EngineStore";

export function StrategyPanel() {
  function setFuelMode(mode: number) {
    const player = engineStore.engine?.world.playerCar;

    if (!player) return;

    player.fuelMode = mode;
  }

  return (
    <div 
      style={{
        position: "absolute",
        left: 20,
        bottom: 20,
        background: "#111",
        color: "white",
        padding: 16,
        borderRadius: 8,
      }}
    >
      <h3>Fuel</h3>

      <button onClick={() => setFuelMode(0)}>Save</button>

      <button onClick={() => setFuelMode(1)}>Balanced</button>

      <button onClick={() => setFuelMode(2)}>Push</button>
    </div>
  );
}