// Logos
import alpineLogo from "../../assets/logos/alpine.svg";
import astonMartinLogo from "../../assets/logos/astonmartin.svg";
import ferrariLogo from "../../assets/logos/ferrari.svg";
import haasLogo from "../../assets/logos/haas.svg";
import mclarenLogo from "../../assets/logos/mclaren.svg";
import mercedesLogo from "../../assets/logos/mercedes.svg";
import racingBullsLogo from "../../assets/logos/racingbulls.svg";
import redBullLogo from "../../assets/logos/redbull.svg";
import sauberLogo from "../../assets/logos/sauber.svg";
import williamsLogo from "../../assets/logos/williams.svg";

// Cars
import alpineCar from "../../assets/cars/alpine.png";
import astonMartinCar from "../../assets/cars/astonmartin.png";
import ferrariCar from "../../assets/cars/ferrari.png";
import haasCar from "../../assets/cars/haas.png";
import mclarenCar from "../../assets/cars/mclaren.png";
import mercedesCar from "../../assets/cars/mercedes.png";
import racingBullsCar from "../../assets/cars/racingbulls.png";
import redBullCar from "../../assets/cars/redbull.png";
import sauberCar from "../../assets/cars/sauber.png";
import williamsCar from "../../assets/cars/williams.png";

// Drivers img
import albonImage from "../../assets/drivers/albon.png";
import alonsoImage from "../../assets/drivers/alonso.png";
import antonelliImage from "../../assets/drivers/antonelli.png";
import bearmanImage from "../../assets/drivers/bearman.png";
import bortoletoImage from "../../assets/drivers/bortoleto.png";
import colapintoImage from "../../assets/drivers/colapinto.png";
import gaslyImage from "../../assets/drivers/gasly.png";
import hadjarImage from "../../assets/drivers/hadjar.png";
import hamiltonImage from "../../assets/drivers/hamilton.png";
import hulkenbergImage from "../../assets/drivers/hulkenberg.png";
import leclercImage from "../../assets/drivers/leclerc.png";
import norrisImage from "../../assets/drivers/norris.png";
import oconImage from "../../assets/drivers/ocon.png";
import piastriImage from "../../assets/drivers/piastri.png";
import russellImage from "../../assets/drivers/russell.png";
import sainzImage from "../../assets/drivers/sainz.png";
import strollImage from "../../assets/drivers/stroll.png";
import tsunodaImage from "../../assets/drivers/tsunoda.png";
import verstappenImage from "../../assets/drivers/verstappen.png";
import perezImage from "../../assets/drivers/perez.png";

export interface Driver {
  id: string;
  name: string;
  shortName: string;
}

export interface Team {
  id: string;
  name: string;
  color: string;

  logo: string;
  carImage: string;

  carScale: number;
  carOffsetX: number;
  carOffsetY: number;

  driverImages: [string, string];

  drivers: [Driver, Driver];
}

export const teams: Team[] = [
  {
    id: "mclaren",
    name: "McLaren",
    color: "#FF8000",
    logo: mclarenLogo,
    carImage: mclarenCar,
    carScale: 1.00,
    carOffsetX: 240,
    carOffsetY: 61,
    driverImages: [norrisImage, piastriImage],
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
    logo: ferrariLogo,
    carImage: ferrariCar,
    carScale: 0.99,
    carOffsetX: 215,
    carOffsetY: 200,
    driverImages: [leclercImage, hamiltonImage],
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
    logo: redBullLogo,
    carImage: redBullCar,
    carScale: 1.03,
    carOffsetX: 230,
    carOffsetY: 40,
    driverImages: [verstappenImage, perezImage],
    drivers: [
      {
        id: "verstappen",
        name: "Max Verstappen",
        shortName: "VER",
      },
      {
        id: "perez",
        name: "Sergio Perez",
        shortName: "PER",
      },
    ],
  },

  {
    id: "mercedes",
    name: "Mercedes",
    color: "#27F4D2",
    logo: mercedesLogo,
    carImage: mercedesCar,
    carScale: 1.02,
    carOffsetX: 240,
    carOffsetY: 60,
    driverImages: [antonelliImage, russellImage],
    drivers: [
      {
        id: "antonelli",
        name: "Kimi Antonelli",
        shortName: "ANT",
      },
      {
        id: "russell",
        name: "George Russell",
        shortName: "RUS",
      },
    ],
  },

  {
    id: "astonmartin",
    name: "Aston Martin",
    color: "#006F62",
    logo: astonMartinLogo,
    carImage: astonMartinCar,
    carScale: 1.01,
    carOffsetX: 244,
    carOffsetY: 40,
    driverImages: [alonsoImage, strollImage],
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
    logo: alpineLogo,
    carImage: alpineCar,
    carScale: 0.98,
    carOffsetX: 250,
    carOffsetY: 100,
    driverImages: [gaslyImage, colapintoImage],
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
    logo: haasLogo,
    carImage: haasCar,
    carScale: 1.00,
    carOffsetX: 245,
    carOffsetY: 70,
    driverImages: [oconImage, bearmanImage],
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
    logo: williamsLogo,
    carImage: williamsCar,
    carScale: 0.97,
    carOffsetX: 220,
    carOffsetY: 65,
    driverImages: [sainzImage, albonImage],
    drivers: [
      {
        id: "sainz",
        name: "Carlos Sainz",
        shortName: "SAI",
      },
      {
        id: "albon",
        name: "Alex Albon",
        shortName: "ALB",
      },
    ],
  },

  {
    id: "racing-bulls",
    name: "Racing Bulls",
    color: "#6692FF",
    logo: racingBullsLogo,
    carImage: racingBullsCar,
    carScale: 0.99,
    carOffsetX: 260,
    carOffsetY: 60,
    driverImages: [hadjarImage, tsunodaImage],
    drivers: [
      {
        id: "hadjar",
        name: "Isack Hadjar",
        shortName: "HAD",
      },
      {
        id: "tsunoda",
        name: "Yuki Tsunoda",
        shortName: "TSU",
      },
    ],
  },

  {
    id: "sauber",
    name: "Sauber",
    color: "#52E252",
    logo: sauberLogo,
    carImage: sauberCar,
    carScale: 1.00,
    carOffsetX: 220,
    carOffsetY: 60,
    driverImages: [hulkenbergImage, bortoletoImage],
    drivers: [
      {
        id: "hulkenberg",
        name: "Nico Hulkenberg",
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

