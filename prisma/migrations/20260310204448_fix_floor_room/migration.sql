/*
  Warnings:

  - Made the column `floor` on table `room` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "room" ALTER COLUMN "floor" SET NOT NULL;
