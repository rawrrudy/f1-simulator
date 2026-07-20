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
            0.2,
            Math.min(8, this.zoom)
        );
    }

    public pan(dx: number, dy: number): void {
        this.offsetX += dx;
        this.offsetY += dy;
    }

    public getTransform(): string {
        return `translate(${this.offsetX} ${this.offsetY}) scale(${this.zoom})`;
    }
    
}