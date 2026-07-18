import { ControlPoint } from "./ControlPoint";

export class Centerline {
    private readonly points: ControlPoint[] = [];

    public addPoint(x: number, y: number): void {
        this.points.push(new ControlPoint(x, y));
    }

    public getPoints(): readonly ControlPoint[] {
        return this.points;
        
    }
}