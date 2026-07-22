export const TyreCompound = {
  Soft: "Soft",
  Medium: "Medium",
  Hard: "Hard",
} as const;

export type TyreCompound =
  (typeof TyreCompound)[keyof typeof TyreCompound];