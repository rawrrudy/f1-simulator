import { Camera } from "./Camera";
import { World } from "../engine/core/World";
import { TrackPass } from "./passes/TrackPass";
import { CarPass } from "./passes/CarPass";

export class CanvasRenderer {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    private readonly camera = new Camera();
    private readonly world: World;

    private readonly trackPass = new TrackPass();
    private readonly carPass = new CarPass();

    constructor(
        canvas: HTMLCanvasElement,
        world: World
    ) {
        this.canvas = canvas;
        this.world = world;

        const context = canvas.getContext("2d");

        if (!context) {
            throw new Error("Failed to create 2D rendering context.");
        }

        this.ctx = context;

        this.resize();

        this.camera.x = this.world.width / 2;
        this.camera.y = this.world.height / 2;

        window.addEventListener("resize", this.resize);
    }

    private resize = () => {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    };

    private drawWorld() {
        // World boundary (temporary, useful while developing)
        this.ctx.strokeStyle = "#2d323c";
        this.ctx.lineWidth = 5;

        this.ctx.strokeRect(
            0,
            0,
            this.world.width,
            this.world.height
        );

        // Render track
        this.trackPass.render(
            this.ctx,
            this.world.track
        );

        // Render cars
        this.carPass.render(
            this.ctx,
            this.world
        );
    }

    render() {
        // Clear screen
        this.ctx.fillStyle = "#0B0D12";
        this.ctx.fillRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );

        // Camera follows the leading car
        const leader = this.world.cars[0];

        const position = this.world.track.getPosition(
            leader.distance
        );

        this.camera.follow(
            position.x,
            position.y
        );

        this.camera.apply(this.ctx);

        this.drawWorld();

        this.camera.reset(this.ctx);
    }
}