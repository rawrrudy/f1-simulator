import bahrainOutline from "../../assets/tracks/bahrain.svg";
import silverstoneOutline from "../../assets/tracks/silverstone.svg";
import monacoOutline from "../../assets/tracks/monaco.svg";

export interface TrackInfo {
  id: string;

  name: string;

  grandPrix: string;

  outline: string;

  length: string;

  laps: number;

  drsZones: number;

  country: string;

  timeOfDay: "Day" | "Night";

  theme: string;
}

export const tracks: TrackInfo[] = [
  {
    id: "bahrain",

    name: "Bahrain",

    grandPrix: "Bahrain Grand Prix",

    outline: bahrainOutline,

    length: "5.412 km",

    laps: 57,

    drsZones: 3,

    country: "Sakhir, Bahrain",

    timeOfDay: "Night",

    theme: "#b36b26",
  },

  {
    id: "silverstone",

    name: "Silverstone",

    grandPrix: "British Grand Prix",

    outline: silverstoneOutline,

    length: "5.891 km",

    laps: 52,

    drsZones: 2,

    country: "Silverstone, United Kingdom",

    timeOfDay: "Day",

    theme: "#3d6ea8"
  },
  {
    id: "monaco",

    name: "Monaco",

    grandPrix: "Monaco Grand Prix",

    outline: monacoOutline,

    length: "3.337 km",

    laps: 78,

    drsZones: 1,

    country: "Monte Carlo, Monaco",

    timeOfDay: "Day",

    theme: "#1d3557",
  },
];