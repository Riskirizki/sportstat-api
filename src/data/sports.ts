export type Sport = {
  id: number;
  name: string;
  description?: string;
  rules?: string[];
  equipment?: string[];
  venue?: string;
  numberOfPlayers?: string;
  playingSurface?: string;
  duration?: string;
};

export const dataSports: Sport[] = [
  {
    id: 1,
    name: "Football",
    description: "A popular team sport played with a spherical ball.",
    rules: ["Offside rule", "Penalty rules"],
    equipment: ["Football", "Goalposts", "Football boots"],
    venue: "Football field",
    numberOfPlayers: "11 players per team",
    playingSurface: "Grass",
    duration: "90 minutes",
  },
  {
    id: 2,
    name: "Basketball",
    description: "A fast-paced team sport played on a rectangular court.",
    rules: ["Dribbling rules", "Foul rules"],
    equipment: ["Basketball", "Basketball hoop", "Basketball shoes"],
    venue: "Basketball court",
    numberOfPlayers: "5 players per team",
    playingSurface: "Hardwood",
    duration: "48 minutes",
  },
  {
    id: 3,
    name: "Tennis",
    description: "A racket sport played individually or in pairs.",
    rules: ["Scoring rules", "Serving rules"],
    equipment: ["Tennis racket", "Tennis ball", "Tennis court"],
    venue: "Tennis court",
    numberOfPlayers:
      "1 player (singles) or 2 players (doubles) or 4 players (mixed doubles)",
    playingSurface: "Grass, Clay, Hard, Carpet",
    duration: "Depends on set count",
  },
];
