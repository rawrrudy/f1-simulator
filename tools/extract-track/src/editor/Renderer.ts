import { hover } from "framer-motion";
import { ControlPoint } from "./ControlPoint";
import { Viewport } from "./Viewport";

export class Renderer {
    constructor(
        private readonly svg: SVGSVGElement,
        private readonly viewport: Viewport
    ) {
        this.editorLayer = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "g"
        );

        this.editorLayer.classList.add("editor-layer");

        this.svg.appendChild(this.editorLayer);
    }

    private readonly editorLayer: SVGGElement;

    public render(
        points: readonly ControlPoint[],
        hoveredPoint: number,
        draggedPoint: number
    ): void {

        this.editorLayer.setAttribute(
            "transform",
            this.viewport.getTransform()
        );

        this.clear();

        this.drawLines(points);
        this.drawPoints(
            points,
            hoveredPoint,
            draggedPoint
        );
    }

    private clear(): void {
        this.svg
            .querySelectorAll(".editor-point, .editor-line")
            .forEach((element) => element.remove());
    }

    private drawLines(points: readonly ControlPoint[]): void {
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

            this.editorLayer.appendChild(line);
        }
    }

    private drawPoints(
        points: readonly ControlPoint[],
        hoveredPoint: number,
        draggedPoint: number
    ): void {
        for (let i = 0; i < points.length; i++)  {

            const point = points[i];

            const circle = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "circle"
            );

            circle.setAttribute("cx", point.x.toString());
            circle.setAttribute("cy", point.y.toString());

            circle.setAttribute("r", "4");

            if (i === draggedPoint) {
                circle.setAttribute("fill", "#ffd000");
            }
            else if (i === hoveredPoint) {
                circle.setAttribute("fill", "#00ffff");
            }
            else {
                circle.setAttribute("fill", "#00ff88");
            }

            circle.classList.add("editor-point");

            this.editorLayer.appendChild(circle);
        }
    }
}
