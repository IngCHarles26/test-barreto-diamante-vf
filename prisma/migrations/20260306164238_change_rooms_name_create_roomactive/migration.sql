/*
  Warnings:

  - You are about to drop the `Rooms` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Rooms";

-- CreateTable
CREATE TABLE "Room" (
    "number" INTEGER NOT NULL,
    "type" "TypeRoom" NOT NULL,
    "active" BOOLEAN NOT NULL,
    "price" INTEGER,
    "floor" INTEGER,
    "posW" DOUBLE PRECISION,
    "posH" DOUBLE PRECISION,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("number")
);

-- CreateTable
CREATE TABLE "RoomActive" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "active" BOOLEAN NOT NULL,
    "dateMoved" TIMESTAMP(3),
    "roomNumber" INTEGER,

    CONSTRAINT "RoomActive_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RoomActive" ADD CONSTRAINT "RoomActive_roomNumber_fkey" FOREIGN KEY ("roomNumber") REFERENCES "Room"("number") ON DELETE SET NULL ON UPDATE CASCADE;
