import { Hono } from "hono";
import { dataSports } from "./data/sports";

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
  const newSport = { id: nextId, ...body };
  sports = [...sports, newSport];
  return c.json({ sport: newSport });
});

export default app;
