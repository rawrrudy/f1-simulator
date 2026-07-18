import { Centerline } from "./Centerline";

export class TrackEditor {
    private readonly svg: SVGSVGElement;
    private readonly centerline = new Centerline();

    constructor(svg: SVGSVGElement) {
        this.svg = svg;

        this.svg.addEventListener("click", this.onClick.bind(this));

        this.render();
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

    private render(): void {
        // Remove prev. editor graphics
        this.svg.querySelectorAll(".editor-point, .editor-line").forEach((e) => e.remove());

        const points = this.centerline.getPoints();

        // Draw connecting lines
        for (let i = 0; i < points.length - 1; i++) {
            const line = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "line"
            );

            line.setAttribute("x1", points[i].x.toString());
            line.setAttribute("y1", points[i].y.toString());
            line.setAttribute("x2", points[i + 1].x.toString());
            line.setAttribute("y2", points[i + 1].y.toString());

            line.setAttribute("stroke", "#00ff88");
            line.setAttribute("stroke-width", "2");

            line.classList.add("editor-line");

            this.svg.appendChild(line);
        }

        // Draw points
        for (const point of points) {
            const circle = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "circle"
            );

            circle.setAttribute("cx", point.x.toString());
            circle.setAttribute("cy", point.y.toString());
            circle.setAttribute("r", "4");

            circle.setAttribute("fill", "#00ff88");

            circle.classList.add("editor-point");

            this.svg.appendChild(circle);
        }
    }
}