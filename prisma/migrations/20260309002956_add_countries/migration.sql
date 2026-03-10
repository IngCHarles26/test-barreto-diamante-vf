/*
  Warnings:

  - You are about to drop the column `roomNumber` on the `roomActive` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "roomActive" DROP CONSTRAINT "roomActive_roomNumber_fkey";

-- AlterTable
ALTER TABLE "roomActive" DROP COLUMN "roomNumber",
ADD COLUMN     "room" INTEGER;

-- CreateTable
CREATE TABLE "country" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "flag" TEXT NOT NULL,

    CONSTRAINT "country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "city" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "city_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "roomActive" ADD CONSTRAINT "roomActive_room_fkey" FOREIGN KEY ("room") REFERENCES "room"("number") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "city" ADD CONSTRAINT "city_country_fkey" FOREIGN KEY ("country") REFERENCES "country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
