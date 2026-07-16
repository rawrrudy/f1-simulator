export interface Vector2 {
    x: number;
    y: number;
}

export function add(a: Vector2, b: Vector2): Vector2 {
    return {
        x: a.x + b.x,
        y: a.y + b.y
    };
}

export function subtract(a: Vector2, b: Vector2): Vector2 {
    return {
        x: a.x - b.x,
        y: a.y - b.y
    };
}

export function multiply(v: Vector2, scalar: number): Vector2 {
    return {
        x: v.x * scalar,
        y: v.y * scalar
    };
}

export function length(v: Vector2): number {
    return Math.hypot(v.x, v.y);
}

export function normalize(v: Vector2): Vector2 {
    const len = length(v);

    if (len === 0) {
        return { x: 0, y: 0 };
    }

    return {
        x: v.x / len,
        y: v.y / len
    };
}

export function lerp(
    a: Vector2,
    b: Vector2,
    t: number
): Vector2 {
    return {
        x: a.x + (b.x - a.x) * t,
        y: a.y + (b.y - a.y) * t
    };
}