import { ControlPoint } from "./ControlPoint";

export class Centerline {
    private readonly points: ControlPoint[] = [];

    public addPoint(x: number, y: number): void {
        this.points.push(new ControlPoint(x, y));
    }

    public getPoints(): readonly ControlPoint[] {
        return this.points;

    }

    public movePoint(index: number, x: number, y: number): void {
        this.points[index].x = x;
        this.points[index].y = y;
    }

    public removePoint(index: number): void {
        if (index < 0 || index >= this.points.length) {
            return;
        }

        this.points.splice(index, 1);
    }
}