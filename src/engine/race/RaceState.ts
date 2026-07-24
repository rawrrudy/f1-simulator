export const RaceState = {
  Green: "Green",
  Yellow: "Yellow",
  SafetyCar: "SafetyCar",
  VirtualSafetyCar: "VirtualSafetyCar",
  RedFlag: "RedFlag",
  Finished: "Finished",
} as const;

export type RaceState =
  (typeof RaceState)[keyof typeof RaceState];