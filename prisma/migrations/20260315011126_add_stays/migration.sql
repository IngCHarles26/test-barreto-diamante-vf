-- CreateEnum
CREATE TYPE "Reason" AS ENUM ('Trabajo', 'Turismo');

-- AlterTable
ALTER TABLE "pay" ADD COLUMN     "stayId" INTEGER;

-- CreateTable
CREATE TABLE "client-stay" (
    "id" SERIAL NOT NULL,
    "dateStart" TIMESTAMP(3) NOT NULL,
    "dateEnd" TIMESTAMP(3),
    "clientId" TEXT NOT NULL,
    "stayId" INTEGER NOT NULL,

    CONSTRAINT "client-stay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stay" (
    "id" SERIAL NOT NULL,
    "dateStart" TIMESTAMP(3) NOT NULL,
    "dateEnd" TIMESTAMP(3),
    "userId" TEXT NOT NULL,
    "roomId" INTEGER NOT NULL,
    "dayCost" DOUBLE PRECISION NOT NULL,
    "totalCost" DOUBLE PRECISION NOT NULL,
    "stars" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "reason" "Reason" NOT NULL,
    "cityId" INTEGER,
    "carPlate" TEXT,
    "comments" TEXT,
    "images" TEXT,

    CONSTRAINT "stay_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "client-stay" ADD CONSTRAINT "client-stay_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client-stay" ADD CONSTRAINT "client-stay_stayId_fkey" FOREIGN KEY ("stayId") REFERENCES "stay"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stay" ADD CONSTRAINT "stay_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "room"("number") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stay" ADD CONSTRAINT "stay_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stay" ADD CONSTRAINT "stay_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "city"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pay" ADD CONSTRAINT "pay_stayId_fkey" FOREIGN KEY ("stayId") REFERENCES "stay"("id") ON DELETE SET NULL ON UPDATE CASCADE;
