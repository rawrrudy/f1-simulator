import type { RaceMessage } from "./RaceMessage";

export class RaceControlSystem {
  currentMessage: RaceMessage | null = null;

  private timer = 0;

  update(deltaTime: number) {
    if (!this.currentMessage) {
      return;
    }

    this.timer -= deltaTime;

    if (this.timer <= 0) {
      this.currentMessage = null;
    }
  }

  show(
    title: string,
    subtitle: string,
    color = "#E10600",
    duration = 4
  ) {
    this.currentMessage = {
        title,
        subtitle,
        color,
    };

    this.timer = duration;
  }
}