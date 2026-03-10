/*
  Warnings:

  - You are about to drop the column `starts` on the `client` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "client" DROP COLUMN "starts",
ADD COLUMN     "stars" INTEGER NOT NULL DEFAULT 0;
