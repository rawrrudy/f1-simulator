import { useRef } from "react";
import { useGameEngine } from "../hooks/useGameEngine";
import { HUD } from "./hud/HUD";

export function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const engineRef = useGameEngine(canvasRef);

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
    </div>
  );
}