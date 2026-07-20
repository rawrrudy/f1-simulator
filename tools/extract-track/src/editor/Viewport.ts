export class Viewport {
    private zoom = 1;

    private offsetX = 0;
    private offsetY = 0;

    public getZoom(): number {
        return this.zoom;
    }

    public zoomBy(amount: number): void {
        this.zoom *= amount;

        this.zoom = Math.max(
            0.1,
            Math.min(20, this.zoom)
        );
    }

    public pan(dx: number, dy: number): void {
        this.offsetX += dx;
        this.offsetY += dy;
    }

    public getTransform(): string {
        return `translate(${this.offsetX} ${this.offsetY}) scale(${this.zoom})`;
    }

    public screenToWorld(x: number, y: number) {
        return {
            x: (x - this.offsetX) / this.zoom,
            y: (y - this.offsetY) / this.zoom
        };
    }

    public getOffsetX(): number {
        return this.offsetX;
    }

    public getOffsetY(): number {
        return this.offsetY;
    }

    public zoomAt(
        screenX: number,
        screenY: number,
        factor: number
    ): void {

        const before = this.screenToWorld(
            screenX,
            screenY
        );

        this.zoom *= factor;

        this.zoom = Math.max(
            0.1,
            Math.min(20, this.zoom)
        );

        const after = this.screenToWorld(
            screenX,
            screenY
        );

        this.offsetX += (after.x - before.x) * this.zoom;
        this.offsetY += (after.y - before.y) * this.zoom;
    }
}