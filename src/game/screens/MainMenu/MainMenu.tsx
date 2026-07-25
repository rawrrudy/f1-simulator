import "./MainMenu.css";

import { Screen, useGame } from "../../state/GameContext";

export function MainMenu() {
  const { setState } = useGame();

  return (
    <div className="main-menu">
      <h1>FORMULA 1</h1>

      <h2>STRATEGY SIMULATOR</h2>

      <button
        onClick={() =>
          setState((previous) => ({
            ...previous,
            currentScreen: Screen.TeamSelection,
          }))
        }
      >
        NEW GAME
      </button>
    </div>
  );
}