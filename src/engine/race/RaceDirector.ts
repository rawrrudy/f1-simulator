import { RaceState } from "./RaceState";

export class RaceDirector {
  state: RaceState = RaceState.Green;

  setState(state: RaceState) {
    this.state = state;
  }

  isGreen() {
    return this.state === RaceState.Green;
  }

  isSafetyCar() {
    return this.state === RaceState.SafetyCar;
  }

  isVSC() {
    return this.state === RaceState.VirtualSafetyCar;
  }

  isFinished() {
    return this.state === RaceState.Finished;
  }
}