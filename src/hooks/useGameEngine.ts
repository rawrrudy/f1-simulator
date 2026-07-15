import { useEffect } from "react";
import { GameEngine } from "../engine/core/GameEngine";

export function useGameEngine(
  canvasRef: React.RefObject<HTMLCanvasElement | null>
) {
  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new GameEngine(canvasRef.current);

    engine.start();
  }, [canvasRef]);
}