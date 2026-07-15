export abstract class Entity {
  x = 0;
  y = 0;

  abstract update(deltaTime: number): void;
}