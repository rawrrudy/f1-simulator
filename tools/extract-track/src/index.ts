import svg from "../assets/bahrain.svg?raw";
import { TrackEditor } from "./editor/TrackEditor";

const app = document.getElementById("app")!;

if (!app) {
    throw new Error("App element not found.")
}

app.innerHTML = svg;

const svgElement = app.querySelector("svg");

if (!svgElement) {
    throw new Error("SVG element not found.");
}

new TrackEditor(svgElement);

const paths = svgElement.querySelectorAll("path");

console.clear();

console.log(`Found ${paths.length} path(s)\n`);

const pathInfo = Array.from(paths).map((path, index) => ({
    index,
    path,
    length: path.getTotalLength(),
}));

pathInfo.sort((a, b) => b.length - a.length);

console.clear();

console.table(
    pathInfo.map(({ index, length }) => ({
        Path: index,
        Length: Number(length.toFixed(2)),
    }))
);

