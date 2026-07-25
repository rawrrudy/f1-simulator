import { MainMenu } from "./game/screens/MainMenu/MainMenu";
import { TeamSelection } from "./game/screens/TeamSelection/TeamSelection";

import { gameState, Screen } from "./game/state/GameState";

import { useEffect, useState } from "react";

export default function App() {
  const [, renderer] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      renderer((v) => v + 1);
    }, 16);

    return () => clearInterval(id);
  }, []);

  switch (gameState.currentScreen) {
    case Screen.MainMenu:
      return <MainMenu />;

    case Screen.TeamSelection:
      return <TeamSelection />;

    default:
      return <MainMenu />;
  }
}