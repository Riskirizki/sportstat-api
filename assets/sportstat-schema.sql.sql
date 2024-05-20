CREATE TABLE "sports" (
  "id" int PRIMARY KEY,
  "name" varchar(100),
  "description" text,
  "rules" text,
  "equipment" text,
  "venue" varchar(100),
  "number_of_players" varchar(50),
  "playing_surface" varchar(50),
  "duration" datetime,
  "created_at" datetime,
  "updated_at" datetime
);

CREATE TABLE "teams" (
  "id" int PRIMARY KEY,
  "sport_id" int,
  "team_name" varchar(100),
  "coach_name" varchar(100),
  "coach_contact" varchar(100),
  "founded" int,
  "created_at" datetime,
  "updated_at" datetime
);

ALTER TABLE "teams" ADD FOREIGN KEY ("sport_id") REFERENCES "sports" ("id");
