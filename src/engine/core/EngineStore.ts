import { GameEngine } from "./GameEngine";

class EngineStore {
  engine: GameEngine | null = null;
}

export const engineStore = new EngineStore();