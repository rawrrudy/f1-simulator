import bahrain from "../assets/bahrain.svg?raw";
import monaco from "../assets/monaco.svg?raw";
import silverstone from "../assets/silverstone.svg?raw";

import { TrackEditor } from "./editor/TrackEditor";

const tracks = {
    bahrain,
    monaco,
    silverstone,
} as const;

const params = new URLSearchParams(window.location.search);

const selectedTrack =
    (params.get("track") as keyof typeof tracks) ??
    "bahrain";

const svg = tracks[selectedTrack] ?? tracks.bahrain;

const app = document.getElementById("app");

if (!app) {
    throw new Error("App element not found.");
}

app.innerHTML = svg;

const svgElement = app.querySelector("svg");

if (!svgElement) {
    throw new Error("SVG element not found.");
}

new TrackEditor(svgElement);

const paths = svgElement.querySelectorAll("path");

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