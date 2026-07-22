export const CarState = {
  Racing: "Racing",
  PitEntry: "PitEntry",
  PitLane: "PitLane",
  PitBox: "PitBox",
  PitExit: "PitExit",
} as const;

export type CarState =
  (typeof CarState)[keyof typeof CarState];