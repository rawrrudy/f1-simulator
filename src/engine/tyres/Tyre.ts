import { TyreCompound } from "./TyreCompound";

export class Tyre {
  compound: TyreCompound;

  wear = 100;

  constructor(compound: TyreCompound) {
    this.compound = compound;
  }

  get grip(): number {
    switch (this.compound) {
      case TyreCompound.Soft:
        return 1.08 * (this.wear / 100);

      case TyreCompound.Medium:
        return 1.00 * (this.wear / 100);

      case TyreCompound.Hard:
        return 0.94 * (this.wear / 100);
    }
  }
}