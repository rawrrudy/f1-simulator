import { useEffect } from "react";

import { GameEngine } from "../engine/core/GameEngine";
import { engineStore } from "../engine/core/EngineStore";
import { useGame } from "../game/state/GameContext";

export function useGameEngine(
  canvasRef: React.RefObject<HTMLCanvasElement | null>
) {
  const { state } = useGame();

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new GameEngine(
      canvasRef.current,
      state.selectedTrack ?? "bahrain",
      state.selectedDriver ?? ""
    );

    engineStore.engine = engine;

    engine.start();

    return () => {
      engineStore.engine = null;
    };
  }, [canvasRef, state.selectedTrack, state.selectedDriver]);
}