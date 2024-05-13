type Sport = {
  id: number;
  name: string;
  description?: string;
  category?: string;
  players?: number;
};

export const dataSports: Sport[] = [
  {
    id: 1,
    name: "Football",
    description: "A popular team sport played with a spherical ball.",
    category: "Team Sport",
    players: 22,
  },
  {
    id: 2,
    name: "Basketball",
    description: "A fast-paced team sport played on a rectangular court.",
    category: "Team Sport",
    players: 10,
  },
  {
    id: 3,
    name: "Tennis",
    description: "A racket sport played individually or in pairs.",
    category: "Individual Sport",
    players: 2,
  },
];
