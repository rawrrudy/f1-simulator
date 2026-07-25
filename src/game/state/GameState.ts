export const Screen = {
  MainMenu: "main-menu",
  TeamSelection: "team-selection",
  DriverSelection: "driver-selection",
  WeekendSetup: "weekend-setup",
  Loading: "loading",
  Race: "race",
  Results: "results",
} as const;

export type Screen =
  (typeof Screen)[keyof typeof Screen];

export class GameState {
  currentScreen: Screen = Screen.MainMenu;

  selectedTeam: string |null = null;

  selectedDriver: string | null = null;

  selectedTrack: string | null = null;

  raceLaps = 57;

  weather = "Sunny";
}

export const gameState = new GameState();