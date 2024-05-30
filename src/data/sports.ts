import { Sport } from "@prisma/client";

export type DataSport = Omit<Sport, "createdAt" | "updatedAt">;

export const dataSports: DataSport[] = [
  {
    id: 1,
    name: "Football",
    description: "A popular team sport played with a spherical ball.",
    rules: "Offside rule, Penalty rules",
    equipment: "Football, Goalposts, Football boots",
    venue: "Football field",
    numberOfPlayers: "11 players per team",
    playingSurface: "Grass",
    duration: new Date(),
  },
  {
    id: 2,
    name: "Basketball",
    description: "A fast-paced team sport played on a rectangular court.",
    rules: "Dribbling rules, Foul rules",
    equipment: "Basketball, Basketball hoop, Basketball shoes",
    venue: "Basketball court",
    numberOfPlayers: "5 players per team",
    playingSurface: "Hardwood",
    duration: new Date(),
  },
  {
    id: 3,
    name: "Tennis",
    description: "A racket sport played individually or in pairs.",
    rules: "Scoring rules, Serving rules",
    equipment: "Tennis racket, Tennis ball, Tennis court",
    venue: "Tennis court",
    numberOfPlayers: "1-4 players.",
    playingSurface: "Grass, Clay, Hard, Carpet",
    duration: new Date(),
  },
];
