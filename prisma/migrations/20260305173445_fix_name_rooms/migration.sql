/*
  Warnings:

  - You are about to drop the `Rooms` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "typeRoom" AS ENUM ('Personal', 'Doble', 'Doble_Familiar', 'Matrimonial', 'Matrimonial_Simple', 'Triple_Familiar');

-- DropTable
DROP TABLE "Rooms";

-- DropEnum
DROP TYPE "TypeRoom";

-- CreateTable
CREATE TABLE "rooms" (
    "number" INTEGER NOT NULL,
    "type" "typeRoom" NOT NULL,
    "active" BOOLEAN NOT NULL,
    "floor" INTEGER,
    "posW" DOUBLE PRECISION,
    "posH" DOUBLE PRECISION,

    CONSTRAINT "rooms_pkey" PRIMARY KEY ("number")
);
