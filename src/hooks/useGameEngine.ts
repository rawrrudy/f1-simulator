import React, { useEffect, useRef } from "react";
import { GameEngine } from "../engine/core/GameEngine";

export function useGameEngine(
  canvasRef: React.RefObject<HTMLCanvasElement | null>
) {
  const engineRef = useRef<GameEngine | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new GameEngine(canvasRef.current);

    engineRef.current = engine;

    engine.start();

    return () => {
      engineRef.current = null;
    };
  }, [canvasRef]);

  return engineRef;
} 