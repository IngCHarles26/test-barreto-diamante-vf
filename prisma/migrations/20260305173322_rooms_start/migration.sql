-- CreateEnum
CREATE TYPE "TypeRoom" AS ENUM ('Personal', 'Doble', 'Doble_Familiar', 'Matrimonial', 'Matrimonial_Simple', 'Triple_Familiar');

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
