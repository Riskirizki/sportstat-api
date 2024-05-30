/*
  Warnings:

  - You are about to alter the column `name` on the `Sport` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE "Sport" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "duration" TIMESTAMP(3),
ADD COLUMN     "equipment" TEXT,
ADD COLUMN     "numberOfPlayers" VARCHAR(50),
ADD COLUMN     "playingSurface" VARCHAR(50),
ADD COLUMN     "rules" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "venue" VARCHAR(100),
ALTER COLUMN   "name" SET DATA TYPE VARCHAR(100);
