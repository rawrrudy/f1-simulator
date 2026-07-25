import "./MainMenu.css";
import { gameState } from "../../state/GameState";
import { Screen } from "../../state/GameState";

export function MainMenu() {
  return (
    <div className="main-menu">
      <h1>FORMULA 1</h1>

      <h2>STRATEGY SIMULATOR</h2>

      <button
        onClick={() => {
          gameState.currentScreen =
            Screen.TeamSelection;
        }}
      >
        NEW GAME
      </button>
    </div>
  );
}