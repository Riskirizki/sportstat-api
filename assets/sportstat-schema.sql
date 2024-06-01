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
  "name" varchar(100),
  "foundingDate" datetime,
  "sportId" int,
  "coachId" int,
  "created_at" datetime,
  "updated_at" datetime
);

CREATE TABLE "coaches" (
  "id" int PRIMARY KEY,
  "name" varchar(100),
  "phone" varchar(20),
  "email" varchar(100),
  "address" varchar(100),
  "created_at" datetime,
  "updated_at" datetime
);

ALTER TABLE "teams" ADD FOREIGN KEY ("sportId") REFERENCES "sports" ("id");

ALTER TABLE "teams" ADD FOREIGN KEY ("coachId") REFERENCES "coaches" ("id");
