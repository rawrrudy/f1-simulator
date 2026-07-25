export interface Team {
  id: string;
  name: string;
  color: string;

  drivers: {
    id: string;
    name: string;
    shortName: string;
  }[];
}

export const teams: Team[] = [
  {
    id: "mclaren",
    name: "McLaren",
    color: "#FF8000",
    drivers: [
      {
        id: "norris",
        name: "Lando Norris",
        shortName: "NOR",
      },
      {
        id: "piastri",
        name: "Oscar Piastri",
        shortName: "PIA",
      },
    ],
  },

  {
    id: "ferrari",
    name: "Ferrari",
    color: "#DC0000",
    drivers: [
      {
        id: "leclerc",
        name: "Charles Leclerc",
        shortName: "LEC",
      },
      {
        id: "hamilton",
        name: "Lewis Hamilton",
        shortName: "HAM",
      },
    ],
  },

  {
    id: "redbull",
    name: "Red Bull Racing",
    color: "#1E41FF",
    drivers: [
      {
        id: "verstappen",
        name: "Max Verstappen",
        shortName: "VER",
      },
      {
        id: "tsunoda",
        name: "Yuki Tsunoda",
        shortName: "TSU",
      },
    ],
  },

  {
    id: "mercedes",
    name: "Mercedes",
    color: "#27F4D2",
    drivers: [
      {
        id: "russell",
        name: "George Russell",
        shortName: "RUS",
      },
      {
        id: "antonelli",
        name: "Kimi Antonelli",
        shortName: "ANT",
      },
    ],
  },

  {
    id: "astonmartin",
    name: "Aston Martin",
    color: "#006F62",
    drivers: [
      {
        id: "alonso",
        name: "Fernando Alonso",
        shortName: "ALO",
      },
      {
        id: "stroll",
        name: "Lance Stroll",
        shortName: "STR",
      },
    ],
  },

  {
    id: "alpine",
    name: "Alpine",
    color: "#0090FF",
    drivers: [
      {
        id: "gasly",
        name: "Pierre Gasly",
        shortName: "GAS",
      },
      {
        id: "colapinto",
        name: "Franco Colapinto",
        shortName: "COL",
      },
    ],
  },

  {
    id: "haas",
    name: "Haas",
    color: "#B6BABD",
    drivers: [
      {
        id: "ocon",
        name: "Esteban Ocon",
        shortName: "OCO",
      },
      {
        id: "bearman",
        name: "Oliver Bearman",
        shortName: "BEA",
      },
    ],
  },

  {
    id: "williams",
    name: "Williams",
    color: "#005AFF",
    drivers: [
      {
        id: "albon",
        name: "Alexander Albon",
        shortName: "ALB",
      },
      {
        id: "sainz",
        name: "Carlos Sainz",
        shortName: "SAI",
      },
    ],
  },

  {
    id: "racing-bulls",
    name: "Racing Bulls",
    color: "#6692FF",
    drivers: [
      {
        id: "hadjar",
        name: "Isack Hadjar",
        shortName: "HAD",
      },
      {
        id: "lawson",
        name: "Liam Lawson",
        shortName: "LAW",
      },
    ],
  },

  {
    id: "sauber",
    name: "Sauber",
    color: "#52E252",
    drivers: [
      {
        id: "hulkenberg",
        name: "Nico Hülkenberg",
        shortName: "HUL",
      },
      {
        id: "bortoleto",
        name: "Gabriel Bortoleto",
        shortName: "BOR",
      },
    ],
  },
];