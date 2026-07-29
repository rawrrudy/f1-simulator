import { World } from "../../engine/core/World";

export class CarPass {
  render(
    ctx: CanvasRenderingContext2D,
    world: World
  ) {
    for (const car of world.cars) {
      if (!car.sprite.loaded) {
        continue;
      }

      const position = world.track.getPosition(
        car.distance,
        car.lateralOffset
      );

      const angle =
        world.track.getDirection(car.distance) +
        Math.PI / 2;

      ctx.save();

      ctx.translate(position.x, position.y);
      ctx.rotate(angle);

      const width = 26;
      const height = 52;

      // ===== PLAYER HIGHLIGHT =====
      if (car.isPlayer) {
        ctx.beginPath();
        ctx.arc(0, 0, 18, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 255, 255, 0.18)";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0, -34);
        ctx.lineTo(-6, -24);
        ctx.lineTo(6, -24);
        ctx.closePath();
        ctx.fillStyle = "#00FFFF";
        ctx.fill();
      }

      ctx.drawImage(
        car.sprite.image,
        -width / 2,
        -height / 2,
        width,
        height
      );

      ctx.restore();
    }
  }
}