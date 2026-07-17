export class Sprite {
  readonly image = new Image();

  constructor(src: string) {
    this.image.src = src;
  }

  get loaded() {
    return this.image.complete;
  }
}