import { useEffect } from "react";

import { GameEngine } from "../engine/core/GameEngine";
import { engineStore } from "../engine/core/EngineStore";
import { World } from "../engine/core/World";
import { useGame } from "../game/state/GameContext";

export function useGameEngine(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  onRaceFinished?: (world: World) => void
) {
  const { state } = useGame();

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new GameEngine(
      canvasRef.current,
      state.selectedTrack ?? "bahrain",
      state.selectedDriver ?? "",
      onRaceFinished
    );

    engineStore.engine = engine;

    engine.start();

    return () => {
      engineStore.engine = null;
    };
  }, [
    canvasRef,
    state.selectedTrack,
    state.selectedDriver,
    onRaceFinished,
  ]);
}