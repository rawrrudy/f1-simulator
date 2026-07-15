import { useRef } from "react";
import { useGameEngine } from "../hooks/useGameEngine";

export function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useGameEngine(canvasRef);

  return <canvas ref={canvasRef} />;
}