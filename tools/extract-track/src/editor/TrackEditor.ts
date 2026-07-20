import { Centerline } from "./Centerline";
import { Renderer } from "./Renderer";
import { Viewport } from "./Viewport";

export class TrackEditor {
    private readonly svg: SVGSVGElement;
    private readonly centerline = new Centerline();
    private readonly viewport = new Viewport();
    private readonly renderer: Renderer;

    private draggedPoint = -1;
    private hoveredPoint = -1;

    private isPanning = false;
    private lastMouseX = 0;
    private lastMouseY = 0;

    constructor(svg: SVGSVGElement) {
        this.svg = svg;

        this.renderer = new Renderer(
            this.svg,
            this.viewport
        );

        this.svg.addEventListener(
            "wheel",
            this.onWheel.bind(this),
            { passive: false }
        );

        this.svg.addEventListener(
            "mousedown",
            this.onMouseDown.bind(this)
        );

        window.addEventListener(
            "mousemove",
            this.onMouseMove.bind(this)
        );

        window.addEventListener(
            "mouseup",
            this.onMouseUp.bind(this)
        );

        this.svg.addEventListener(
            "contextmenu",
            this.onRightClick.bind(this)
        );

        window.addEventListener(
            "keydown",
            this.onKeyDown.bind(this)
        );

        this.render();
    }

    private onMouseDown(event: MouseEvent): void {
        // Middle mouse -> pan
        if (event.button === 1) {
            event.preventDefault();

            this.isPanning = true;
            this.lastMouseX = event.clientX;
            this.lastMouseY = event.clientY;
            return;
        }

        // Only left mouse edits
        if (event.button !== 0) {
            return;
        }

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
        if (this.isPanning) {
            const dx = event.clientX - this.lastMouseX;
            const dy = event.clientY - this.lastMouseY;

            this.viewport.pan(dx, dy);

            this.lastMouseX = event.clientX;
            this.lastMouseY = event.clientY;

            this.render();
            return;
        }

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

    private onMouseUp(event: MouseEvent): void {
        if (event.button === 1) {
            this.isPanning = false;
            return;
        }

        this.draggedPoint = -1;
    }

    private onRightClick(event: MouseEvent): void {
        event.preventDefault();

        const point = this.getMousePosition(event);

        const index = this.findPoint(point.x, point.y);

        if (index < 0) {
            return;
        }

        this.centerline.removePoint(index);

        this.hoveredPoint = -1;

        if (this.draggedPoint === index) {
            this.draggedPoint = -1;
        }

        this.render();
    }

    private onWheel(event: WheelEvent): void {
        event.preventDefault();

        const pt = this.svg.createSVGPoint();

        pt.x = event.clientX;
        pt.y = event.clientY;

        const svgPoint = pt.matrixTransform(
            this.svg.getScreenCTM()!.inverse()
        );

        const factor =
            event.deltaY < 0
                ? 1.1
                : 0.9;

        this.viewport.zoomAt(
            svgPoint.x,
            svgPoint.y,
            factor
        );

        this.render();
    }

    private getMousePosition(event: MouseEvent) {
        const pt = this.svg.createSVGPoint();

        pt.x = event.clientX;
        pt.y = event.clientY;

        const svgPoint = pt.matrixTransform(
            this.svg.getScreenCTM()!.inverse()
        );

        return this.viewport.screenToWorld(
            svgPoint.x,
            svgPoint.y
        );
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

    private async onKeyDown(event: KeyboardEvent): Promise<void> {
        if (event.ctrlKey && event.key.toLowerCase() === "e") {
            const text = this.centerline.exportPoints();

            console.log(text);

            try {
                await navigator.clipboard.writeText(text);
                alert("Track copied to clipboard");
            } catch {
                alert("Couldn't copy to clipboard. Check console.");
            }
        }
    }
}