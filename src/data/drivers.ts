import { Driver } from "../engine/entities/Driver";

export const drivers = [
  // Red Bull
  new Driver("Max Verstappen", "VER", "Red Bull", 99, 99, 98),
  new Driver("Sergio Perez", "PER", "Red Bull", 92, 92, 90),

  // McLaren
  new Driver("Lando Norris", "NOR", "McLaren", 97, 96, 97),
  new Driver("Oscar Piastri", "PIA", "McLaren", 96, 96, 96),

  // Ferrari
  new Driver("Charles Leclerc", "LEC", "Ferrari", 97, 96, 97),
  new Driver("Lewis Hamilton", "HAM", "Ferrari", 99, 99, 99),

  // Mercedes
  new Driver("Kimi Antonelli", "ANT", "Mercedes", 98, 97, 96),
  new Driver("George Russell", "RUS", "Mercedes", 96, 94, 95),

  // Aston Martin
  new Driver("Fernando Alonso", "ALO", "Aston Martin", 96, 97, 96),
  new Driver("Lance Stroll", "STR", "Aston Martin", 86, 86, 85),

  // Alpine
  new Driver("Pierre Gasly", "GAS", "Alpine", 90, 91, 90),
  new Driver("Franco Colapinto", "COL", "Alpine", 87, 87, 87),

  // Racing Bulls
  new Driver("Yuki Tsunoda", "TSU", "Racing Bulls", 91, 91, 90),
  new Driver("Isack Hadjar", "HAD", "Racing Bulls", 89, 89, 89),

  // Haas
  new Driver("Esteban Ocon", "OCO", "Haas", 90, 90, 90),
  new Driver("Oliver Bearman", "BEA", "Haas", 89, 89, 89),

  // Williams
  new Driver("Alex Albon", "ALB", "Williams", 93, 93, 93),
  new Driver("Carlos Sainz", "SAI", "Williams", 95, 95, 95),

  // Sauber
  new Driver("Nico Hulkenberg", "HUL", "Sauber", 91, 91, 91),
  new Driver("Gabriel Bortoleto", "BOR", "Sauber", 88, 88, 88),
];