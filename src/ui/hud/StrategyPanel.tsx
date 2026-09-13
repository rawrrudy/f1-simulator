import { useState } from "react";
import { engineStore } from "../../engine/core/EngineStore";
import { CarState } from "../../engine/entities/CarState";

export function StrategyPanel() {
  const player = engineStore.engine?.world.playerCar;

  const [, forceUpdate] = useState(0);

  if (!player) {
    return null;
  }

  function setFuelMode(mode: number) {
    if (!player) return;

    player.fuelMode = mode;
    forceUpdate((value) => value + 1);
  }

  function requestPit() {
    if (!player) return;

    if (player.state !== CarState.Racing) {
      return;
    }

    player.wantsToPit = true;
    forceUpdate((value) => value + 1);
  }

  const fuelModes = [
    {
      value: 0,
      label: "SAVE",
      description: "Conserve fuel",
    },
    {
      value: 1,
      label: "BALANCED",
      description: "Standard pace",
    },
    {
      value: 2,
      label: "PUSH",
      description: "Maximum attack",
    },
  ];

  const isPitting = player.state !== CarState.Racing;

  let pitStatus = "READY";

  switch (player.state) {
    case CarState.PitEntry:
      pitStatus = "PIT ENTRY";
      break;

    case CarState.PitLane:
      pitStatus = "PIT LANE";
      break;

    case CarState.PitBox:
      pitStatus = "PIT BOX";
      break;

    case CarState.PitExit:
      pitStatus = "PIT EXIT";
      break;
  }

  return (
    <div
      style={{
        position: "absolute",
        right: 20,
        bottom: 20,
        width: 320,
        background: "#171A20",
        color: "#FFFFFF",
        border: "1px solid #303640",
        borderRadius: 10,
        padding: 18,
        boxShadow: "0 12px 40px rgba(0,0,0,0.45)",
      }}
    >
      <div
        style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.14em",
          color: "#B8BDC7",
          marginBottom: 4,
        }}
      >
        RACE STRATEGY
      </div>

      <h3
        style={{
          fontSize: 20,
          margin: "0 0 16px",
          letterSpacing: "0.05em",
        }}
      >
        FUEL MODE
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 8,
        }}
      >
        {fuelModes.map((mode) => {
          const selected = player.fuelMode === mode.value;

          return (
            <button
              key={mode.value}
              onClick={() => setFuelMode(mode.value)}
              disabled={isPitting}
              style={{
                border: selected
                  ? "1px solid #FF7B00"
                  : "1px solid #303640",
                borderRadius: 7,
                padding: "10px 6px",
                background: selected
                  ? "#FF7B00"
                  : "#1D2128",
                color: "#FFFFFF",
                cursor: isPitting ? "not-allowed" : "pointer",
                fontFamily: "inherit",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "0.04em",
                opacity: isPitting ? 0.5 : 1,
              }}
            >
              {mode.label}
            </button>
          );
        })}
      </div>

      <div
        style={{
          marginTop: 10,
          paddingTop: 10,
          borderTop: "1px solid #303640",
          color: "#B8BDC7",
          fontSize: 12,
        }}
      >
        {
          fuelModes.find(
            (mode) => mode.value === player.fuelMode
          )?.description
        }
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 14,
          fontSize: 13,
        }}
      >
        <span style={{ color: "#B8BDC7" }}>
          Fuel Remaining
        </span>

        <strong>
          {player.fuel.toFixed(1)} kg
        </strong>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 8,
          fontSize: 13,
        }}
      >
        <span style={{ color: "#B8BDC7" }}>
          Pit Status
        </span>

        <strong
          style={{
            color: isPitting ? "#FF7B00" : "#FFFFFF",
          }}
        >
          {pitStatus}
        </strong>
      </div>

      <button
        onClick={requestPit}
        disabled={isPitting}
        style={{
          width: "100%",
          marginTop: 16,
          padding: "12px 14px",
          border: isPitting
            ? "1px solid #303640"
            : "1px solid #FF7B00",
          borderRadius: 7,
          background: isPitting
            ? "#1D2128"
            : "#FF7B00",
          color: "#FFFFFF",
          cursor: isPitting ? "not-allowed" : "pointer",
          fontFamily: "inherit",
          fontWeight: 800,
          fontSize: 13,
          letterSpacing: "0.08em",
        }}
      >
        {isPitting ? pitStatus : "BOX THIS LAP"}
      </button>
    </div>
  );
}