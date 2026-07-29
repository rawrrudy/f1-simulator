import { engineStore } from "../../engine/core/EngineStore";

export function StrategyPanel() {
  const player = engineStore.engine?.world.playerCar;

  function setFuelMode(mode: number) {
    if (!player) return;

    player.fuelMode = mode;
  }

  return (
    <div
      style={{
        position: "absolute",
        right: 20,
        bottom: 20,
        background: "#151515",
        color: "white",
        padding: 16,
        borderRadius: 8,
      }}
    >
      <h3>Fuel</h3>

      {[0, 1, 2].map((mode) => (
        <button
          key={mode}
          onClick={() => setFuelMode(mode)}
          style={{
            margin: 4,
            fontWeight:
              player?.fuelMode === mode ? "bold" : "normal",
          }}
        >
          {mode === 0
            ? "SAVE"
            : mode === 1
            ? "BALANCED"
            : "PUSH"}
        </button>
      ))}
    </div>
  );
}