import { CanvasRenderer } from "../../rendering/CanvasRenderer";
import { World } from "./World";

export class GameEngine {
  private readonly timestep = 1 / 60;

  private accumulator = 0;

  private lastTime = 0;

  private renderer: CanvasRenderer;

  readonly world: World;

  private hasFinished = false;

  constructor(
    canvas: HTMLCanvasElement,
    trackId: string,
    selectedDriver: string,
    private readonly onRaceFinished?: (world: World) => void
  ) {
    this.world = new World(
      trackId,
      selectedDriver
    );

    this.renderer = new CanvasRenderer(
      canvas,
      this.world
    );
  }

  start() {
    requestAnimationFrame(this.loop);
  }

  private loop = (time: number) => {
    if (!this.lastTime) this.lastTime = time;

    let delta = (time - this.lastTime) / 1000;

    this.lastTime = time;

    if (delta > 0.25) delta = 0.25;

    this.accumulator += delta;

    while (this.accumulator >= this.timestep) {
      this.update(this.timestep);
      this.accumulator -= this.timestep;
    }

    this.render();

    requestAnimationFrame(this.loop);
  };

  private update(deltaTime: number) {
    this.world.update(deltaTime);

    if (
      this.world.raceDirector.isFinished() &&
      !this.hasFinished
    ) {
      this.hasFinished = true;
      this.onRaceFinished?.(this.world);
    }
  }

  private render() {
    this.renderer.render();
  }
}