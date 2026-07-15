import { useEffect } from "react";
import { GameEngine } from "../engine/core/GameEngine";

export function useGamingEngine() {
  useEffect(() => {
    const engine = new GameEngine();
    engine.start();
  }, []);
}