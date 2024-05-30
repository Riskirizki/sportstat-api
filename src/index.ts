import { Hono } from "hono";
import { type Sport, dataSports } from "./data/sports";

let sports = dataSports;

const app = new Hono();

app.get("/", (c) => c.json({ message: "Hello from SportStat!" }));

app.get("/sports", (c) => c.json(sports));

app.get("/sports/:id", (c) => {
  const id = parseInt(c.req.param("id"));
  const sport = sports.find((sport) => sport.id === id);
  if (!sport) {
    c.status(404);
    return c.json({ message: "Sport not found" });
  }
  return c.json(sport);
});

app.post("/sports", async (c) => {
  const body = await c.req.json();
  const nextId = sports[sports.length - 1].id + 1;

  const newSport: Sport = {
    id: nextId,
    name: body.name || null,
    description: body.description || null,
    rules: body.rules || null,
    equipment: body.equipment || null,
    venue: body.venue || null,
    numberOfPlayers: body.numberOfPlayers || null,
    playingSurface: body.playingSurface || null,
    duration: body.duration || null,
  };

  sports = [...sports, newSport];
  return c.json({ sports: newSport });
});

app.delete("/sports", (c) => {
  sports = [];
  return c.json({ message: "All sports deleted" });
});

app.delete("/sports/:id", (c) => {
  const id = parseInt(c.req.param("id"));

  const sport = sports.find((sport) => sport.id === id);

  if (!sport) {
    c.status(404);
    return c.json({ message: "Sport not found" });
  }

  const updatedSports = sports.filter((sport) => sport.id !== id);
  sports = updatedSports;

  return c.json({
    message: `Deleted sport with id ${id}`,
  });
});

app.put("/sports/:id", async (c) => {
  const id = parseInt(c.req.param("id"));
  const body = await c.req.json();

  const sport = sports.find((sport) => sport.id === id);

  if (!sport) {
    c.status(404);
    return c.json({ message: "Sport not found" });
  }

  const updatedSport = {
    ...sport,
    name: body.name || sport.name,
    description: body.description || sport.description,
    rules: body.rules || sport.rules,
    equipment: body.equipment || sport.equipment,
    venue: body.venue || sport.venue,
    numberOfPlayers: body.numberOfPlayers || sport.numberOfPlayers,
    playingSurface: body.playingSurface || sport.playingSurface,
    duration: body.duration || sport.duration,
  };

  const updatedSports = sports.map((sport) => {
    if (sport.id === id) {
      return updatedSport;
    } else {
      return sport;
    }
  });

  sports = updatedSports;

  return c.json({
    message: `Updated sport with id ${id}`,
    sport: updatedSport,
  });
});

console.log("SportStat API is running");

export default app;
