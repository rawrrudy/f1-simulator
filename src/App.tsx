import { GameProvider } from "./game/state/GameContext";
import { GameRouter } from "./game/GameRouter";

export default function App() {
  return(
    <GameProvider>
      <GameRouter />
    </GameProvider>
  );
}