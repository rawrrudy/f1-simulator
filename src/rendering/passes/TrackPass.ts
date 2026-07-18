import { Track } from "../../engine/track/Track";

export class TrackPass {
  render(
    ctx: CanvasRenderingContext2D,
    track: Track
  ) {
    const points = track.points;

    if (points.length < 2) return;

    // Grass
    ctx.strokeStyle = "#2d6a2d";
    ctx.lineWidth = 70;

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }

    ctx.stroke();

    // Asphalt
    ctx.strokeStyle = "#3b3b3b";
    ctx.lineWidth = 50;

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }

    ctx.stroke();

    // White edges
    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }

    ctx.stroke();
  }
}