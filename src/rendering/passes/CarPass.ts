import { World } from "../../engine/core/World";
import { Sprite } from "../Sprite";
import carSprite from "../../assets/images/orange.png";

export class CarPass {
  private readonly sprite = new Sprite(carSprite);

  render(
    ctx: CanvasRenderingContext2D,
    world: World
  ) {
    if (!this.sprite.loaded) return;

    for (const car of world.cars) {
      const position =
        world.track.getPosition(car.distance);

      const angle =
        world.track.getDirection(car.distance) +
        Math.PI / 2;

      ctx.save();

      ctx.translate(position.x, position.y);
      ctx.rotate(angle);

      ctx.drawImage(
        this.sprite.image,
        -20,
        -40,
        40,
        80
      );

      ctx.restore();
    }
  }
}