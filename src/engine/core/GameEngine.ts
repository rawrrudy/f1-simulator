import { CanvasRenderer } from "../../rendering/CanvasRenderer";
import { World } from "./World";

export class GameEngine {
  private readonly timestep = 1 / 60;

  private accumulator = 0;

  private lastTime = 0;

  private renderer: CanvasRenderer;

  private world = new World();

  constructor(canvas: HTMLCanvasElement) {
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
  }

  private render() {
    this.renderer.render();
  }
}