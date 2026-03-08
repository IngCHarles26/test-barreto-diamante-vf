/*
  Warnings:

  - You are about to drop the `Room` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RoomActive` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RoomActive" DROP CONSTRAINT "RoomActive_roomNumber_fkey";

-- DropTable
DROP TABLE "Room";

-- DropTable
DROP TABLE "RoomActive";

-- CreateTable
CREATE TABLE "room" (
    "number" INTEGER NOT NULL,
    "type" "TypeRoom" NOT NULL,
    "active" BOOLEAN NOT NULL,
    "price" INTEGER,
    "floor" INTEGER,
    "posW" DOUBLE PRECISION,
    "posH" DOUBLE PRECISION,

    CONSTRAINT "room_pkey" PRIMARY KEY ("number")
);

-- CreateTable
CREATE TABLE "roomActive" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "active" BOOLEAN NOT NULL,
    "dateMoved" TIMESTAMP(3),
    "roomNumber" INTEGER,

    CONSTRAINT "roomActive_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "roomActive" ADD CONSTRAINT "roomActive_roomNumber_fkey" FOREIGN KEY ("roomNumber") REFERENCES "room"("number") ON DELETE SET NULL ON UPDATE CASCADE;
