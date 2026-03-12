-- CreateEnum
CREATE TYPE "PayType" AS ENUM ('efectivo', 'electronico');

-- CreateTable
CREATE TABLE "pay" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "payType" "PayType" NOT NULL DEFAULT 'efectivo',
    "mount" DOUBLE PRECISION NOT NULL,
    "operationNumber" TEXT,
    "startDayDate" TIMESTAMP(3),
    "endDayDate" TIMESTAMP(3),

    CONSTRAINT "pay_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pay" ADD CONSTRAINT "pay_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
