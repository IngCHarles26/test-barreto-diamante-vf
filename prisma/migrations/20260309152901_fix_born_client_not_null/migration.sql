/*
  Warnings:

  - Made the column `born` on table `client` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "client" ALTER COLUMN "born" SET NOT NULL;
