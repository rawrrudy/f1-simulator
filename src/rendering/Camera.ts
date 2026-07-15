export class Camera {
  x = 0;
  y = 0;

  zoom = 1;

  apply(ctx: CanvasRenderingContext2D) {
    ctx.save();

    ctx.translate(window.innerWidth / 2, window.innerHeight / 2);

    ctx.scale(this.zoom, this.zoom);

    ctx.translate(-this.x, -this.y);
  }

  reset(ctx: CanvasRenderingContext2D) {
    ctx.restore();
  }
}