import { Hono } from "hono";
import { prisma } from "./lib/db.ts";
import { dataSports } from "./data/sports.ts";

const app = new Hono();

app.post("/sports/seed", async (c) => {
  try {
    const sports = await prisma.sport.createMany({ data: dataSports });

    return c.json(sports);
  } catch (error) {
    console.error("Error seeding sports:", error);
    c.status(500);

    return c.json({ message: "Internal server error" });
  }
});

app.get("/", (c) => {
  return c.json({ message: "Welcome to SportStat API" });
});

app.get("/sports", async (c) => {
  try {
    const sports = await prisma.sport.findMany();

    return c.json(sports);
  } catch (error) {
    console.error("Error fetching sports:", error);
    c.status(500);

    return c.json({ message: "Internal server error" });
  }
});

app.get("/sports/:id", async (c) => {
  const id = Number(c.req.param("id"));

  try {
    const sport = await prisma.sport.findUnique({
      where: { id },
      include: {
        teams: {
          include: {
            coach: true,
          },
        },
      },
    });

    if (!sport) {
      c.status(404);

      return c.json({ message: "Sport not found" });
    }

    return c.json(sport);
  } catch (error) {
    console.error(`Error fetching sport with ID ${id}:`, error);
    c.status(500);

    return c.json({ message: "Internal server error" });
  }
});

app.post("/sports", async (c) => {
  const body = await c.req.json();

  try {
    const sport = await prisma.sport.create({
      data: {
        name: body.name,
        description: body.description,
        rules: body.rules,
        equipment: body.equipment,
        venue: body.venue,
        numberOfPlayers: body.numberOfPlayers,
        playingSurface: body.playingSurface,
        duration: new Date(),
      },
    });

    return c.json({ sport });
  } catch (error) {
    console.error("Error creating sport:", error);
    c.status(400);

    return c.json({ message: "Invalid request body" });
  }
});

app.delete("/sports", async (c) => {
  try {
    const result = await prisma.sport.deleteMany();

    return c.json({
      message: "All sports data have been removed",
      result,
    });
  } catch (error) {
    console.error("Error deleting sports:", error);
    c.status(500);

    return c.json({ message: "Internal server error" });
  }
});

app.delete("/sports/:id", async (c) => {
  const id = Number(c.req.param("id"));

  try {
    const deletedSport = await prisma.sport.delete({ where: { id } });

    return c.json({
      message: `Deleted sport with ID ${id}`,
      deletedSport,
    });
  } catch (error) {
    console.error(`Error deleting sport with ID ${id}:`, error);
    c.status(500);

    return c.json({ message: "Internal server error" });
  }
});

app.put("/sports/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const body = await c.req.json();

  try {
    const updatedSport = await prisma.sport.update({
      where: { id },
      data: {
        name: body.name,
        description: body.description,
        rules: body.rules,
        equipment: body.equipment,
        venue: body.venue,
        numberOfPlayers: body.numberOfPlayers,
        playingSurface: body.playingSurface,
        duration: new Date(),
      },
    });

    return c.json({
      message: `Updated sport with ID ${id}`,
      updatedSport,
    });
  } catch (error) {
    console.error(`Error updating sport with ID ${id}:`, error);
    c.status(400);

    return c.json({ message: "Invalid request body" });
  }
});

console.log("SportStat API is running");

export default app;
