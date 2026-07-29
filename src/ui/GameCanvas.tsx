import { useEffect, useRef, useState } from "react";

import { useGameEngine } from "../hooks/useGameEngine";
import { HUD } from "./hud/HUD";
import { engineStore } from "../engine/core/EngineStore";
import { World } from "../engine/core/World";
import { ResultsScreen } from "./results/ResultsScreen";

export function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [resultsWorld, setResultsWorld] =
    useState<World | null>(null);

  useGameEngine(canvasRef);

  useEffect(() => {
    const interval = setInterval(() => {
      const world = engineStore.engine?.world;

      if (
        world &&
        world.raceDirector.isFinished()
      ) {
        setResultsWorld(world);
        clearInterval(interval);
      }
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
        }}
      />

      <HUD />

      {resultsWorld && (
        <ResultsScreen world={resultsWorld} />
      )}
    </div>
  );
}