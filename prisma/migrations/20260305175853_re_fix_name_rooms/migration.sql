/*
  Warnings:

  - You are about to drop the `rooms` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "TypeRoom" AS ENUM ('Personal', 'Doble', 'Doble_Familiar', 'Matrimonial', 'Matrimonial_Simple', 'Triple_Familiar');

-- DropTable
DROP TABLE "rooms";

-- DropEnum
DROP TYPE "typeRoom";

-- CreateTable
CREATE TABLE "Rooms" (
    "number" INTEGER NOT NULL,
    "type" "TypeRoom" NOT NULL,
    "active" BOOLEAN NOT NULL,
    "floor" INTEGER,
    "posW" DOUBLE PRECISION,
    "posH" DOUBLE PRECISION,

    CONSTRAINT "Rooms_pkey" PRIMARY KEY ("number")
);
