import { Camera } from "./Camera";
import { World } from "../engine/core/World";
import carSprite from "../assets/images/orange.png";
import { Sprite } from "./Sprite";

export class CanvasRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private camera = new Camera();

  private world: World;

  private readonly car = new Sprite(carSprite)

  private drawWorld() {
    this.ctx.strokeStyle = "#2d323c";
    this.ctx.lineWidth = 5;

    this.ctx.strokeRect(
      0,
      0,
      this.world.width,
      this.world.height
    );

    const points = this.world.track.points;

    this.ctx.strokeStyle = "#ffffff";
    this.ctx.lineWidth = 18;

    this.ctx.beginPath();

    this.ctx.moveTo(points[0].x, points[0].y);

    for (let i = 1; i < points.length; i++) {
      this.ctx.lineTo(points[i].x, points[i].y)
    }

    this.ctx.stroke();

    for (const car of this.world.cars) {
      const position = this.world.track.getPosition(car.distance);

      this.ctx.fillStyle = "#ff3333";

      this.ctx.beginPath();

      this.ctx.arc(
        position.x,
        position.y,
        14,
        0,
        Math.PI * 2
      );

      this.ctx.fill();
    }
  }

  constructor(
      canvas: HTMLCanvasElement,
      world: World
  ) {
      this.canvas = canvas;
      this.world = world;

      const context = canvas.getContext("2d");

      if (!context) {
          throw new Error("Failed to create 2D rendering context.");
      }

      this.ctx = context;

      this.resize();
 
      this.camera.x = this.world.width / 2;
      this.camera.y = this.world.height / 2;

      window.addEventListener("resize", this.resize);
  }

  private resize = () => {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  };

  render() {
    this.ctx.fillStyle = "#0B0D12";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const leader = this.world.cars[0];

    const position =
        this.world.track.getPosition(leader.distance);

    this.camera.follow(
      position.x,
      position.y
    );

    this.camera.apply(this.ctx);

    this.drawWorld();

    this.camera.reset(this.ctx);
  }
}