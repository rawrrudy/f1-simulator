import { MainMenu } from "./screens/MainMenu/MainMenu";
import { TeamSelection } from "./screens/TeamSelection/TeamSelection";
import { DriverSelection } from "./screens/DriverSelection/DriverSelection";


import { Screen, useGame } from "./state/GameContext";

export function GameRouter() {
  const { state } = useGame();

  switch (state.currentScreen) {
    case Screen.MainMenu:
      return <MainMenu />;

    case Screen.TeamSelection:
      return <TeamSelection />;

    case Screen.DriverSelection:
      return <DriverSelection />;

    default:
      return <MainMenu />;
  }
}