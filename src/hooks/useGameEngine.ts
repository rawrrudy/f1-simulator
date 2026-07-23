import { useEffect } from "react";
import { GameEngine } from "../engine/core/GameEngine";
import { engineStore } from "../engine/core/EngineStore";

export function useGameEngine(
  canvasRef: React.RefObject<HTMLCanvasElement | null>
) {
  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new GameEngine(canvasRef.current);

    engineStore.engine = engine;

    engine.start();

    return() => {
      engineStore.engine = null;
    };
  }, [canvasRef]);
}