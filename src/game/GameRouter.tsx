import { MainMenu } from "./screens/MainMenu/MainMenu";
import { TeamSelection } from "./screens/TeamSelection/TeamSelection";
import { DriverSelection } from "./screens/DriverSelection/DriverSelection";
import { WeekendSetup } from "./screens/WeekendSetup/WeekendSetup";
import { Loading } from "./screens/Loading/Loading";
import { Race } from "./screens/Race/Race";
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

    case Screen.WeekendSetup:
      return <WeekendSetup />;

    case Screen.Loading:
      return <Loading />;

    case Screen.Race:
      return <Race />;

    default:
      return <MainMenu />;
  }
}