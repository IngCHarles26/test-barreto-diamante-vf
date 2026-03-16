/*
  Warnings:

  - You are about to drop the column `dayCost` on the `stay` table. All the data in the column will be lost.
  - You are about to alter the column `stars` on the `stay` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "stay" DROP COLUMN "dayCost",
ALTER COLUMN "totalCost" DROP NOT NULL,
ALTER COLUMN "stars" SET DEFAULT 0,
ALTER COLUMN "stars" SET DATA TYPE INTEGER;
