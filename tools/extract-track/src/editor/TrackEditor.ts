import { Centerline } from "./Centerline";
import { Renderer } from "./Renderer";

export class TrackEditor {
    private readonly svg: SVGSVGElement;
    private readonly centerline = new Centerline();
    private readonly renderer: Renderer;
    private draggedPoint = -1;
    private hoveredPoint = -1;

    constructor(svg: SVGSVGElement) {
        this.svg = svg;

        this.svg.addEventListener("mousedown", this.onMouseDown.bind(this));
        window.addEventListener("mousemove", this.onMouseMove.bind(this));
        window.addEventListener("mouseup", this.onMouseUp.bind(this));

        this.renderer = new Renderer(this.svg)

        this.render();
    }

    private onMouseDown(event: MouseEvent): void {
        const point = this.getMousePosition(event);

        const index = this.findPoint(point.x, point.y);

        if (index >= 0) {
            this.draggedPoint = index;
            return;
        }

        this.centerline.addPoint(point.x, point.y);

        this.render();
    }

    private onMouseMove(event: MouseEvent): void {
        const point = this.getMousePosition(event);

        this.hoveredPoint = this.findPoint(point.x, point.y);

        if (this.draggedPoint >= 0) {
            this.centerline.movePoint(
                this.draggedPoint,
                point.x,
                point.y
            );
        }

        this.render();
    }

    private onMouseUp(): void {
        this.draggedPoint = -1;
    }

    private onClick(event: MouseEvent): void {
        const point = this.getMousePosition(event);

        this.centerline.addPoint(point.x, point.y);

        this.render();
    }

    private getMousePosition(event: MouseEvent) {
        const pt = this.svg.createSVGPoint();

        pt.x = event.clientX;
        pt.y = event.clientY;

        const transformed = pt.matrixTransform(
            this.svg.getScreenCTM()!.inverse()
        );

        return transformed;
    }

    private findPoint(x: number, y: number): number {
        const points = this.centerline.getPoints();

        const radius = 8;

        for (let i = 0; i < points.length; i++) {
            const dx = points[i].x - x;
            const dy = points[i].y - y;

            if (dx * dx + dy * dy <= radius * radius) {
                return i;
            }
        }

        return -1;
    }

    private render(): void {
        this.renderer.render(
            this.centerline.getPoints(),
            this.hoveredPoint,
            this.draggedPoint
        );
    }
}