export class CanvasRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;

    const context = canvas.getContext("2d");

    if (!context) {
      throw new Error("Failed to create 2D rendering context.");
    }

    this.ctx = context;

    this.resize();

    window.addEventListener("resize", this.resize);
  }

  private resize = () => {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  };

  render() {
    this.ctx.fillStyle = "#0B0D12";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = "#ffffff";

    this.ctx.font = "bold 42px Inter";

    this.ctx.textAlign = "center";

    this.ctx.fillText(
      "F1 Strategy Simulator",
      this.canvas.width / 2,
      this.canvas.height / 2
    );
  }
}