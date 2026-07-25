import {
  createContext,
  useContext,
  useState,
} from "react";

import type { ReactNode } from "react";

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

export interface GameState {
  currentScreen: Screen;

  selectedTeam: string | null;

  selectedDriver: string | null;

  selectedTrack: string | null;

  raceLaps: number;

  weather: string;
}

interface GameContextValue {
  state: GameState;

  setState: React.Dispatch<
    React.SetStateAction<GameState>
  >;
}

const GameContext =
  createContext<GameContextValue | null>(null);

export function GameProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, setState] = useState<GameState>({
    currentScreen: Screen.MainMenu,

    selectedTeam: null,

    selectedDriver: null,

    selectedTrack: null,

    raceLaps: 57,

    weather: "Sunny",
  });

  return (
    <GameContext.Provider value={{ state, setState }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error(
      "useGame must be used inside GameProvider."
    );
  }

  return context;
}