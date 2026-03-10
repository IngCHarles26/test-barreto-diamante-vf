/*
  Warnings:

  - You are about to drop the column `country` on the `city` table. All the data in the column will be lost.
  - Added the required column `countryId` to the `city` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TypeDocuments" AS ENUM ('DNI', 'Pasaporte', 'Carnet_Extranjeria', 'Otros');

-- DropForeignKey
ALTER TABLE "city" DROP CONSTRAINT "city_country_fkey";

-- AlterTable
ALTER TABLE "city" DROP COLUMN "country",
ADD COLUMN     "countryId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "client" (
    "id" TEXT NOT NULL,
    "typeDocument" "TypeDocuments" NOT NULL,
    "numberDocument" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    "starts" INTEGER NOT NULL DEFAULT 0,
    "totalStays" INTEGER NOT NULL DEFAULT 0,
    "lastStay" TIMESTAMP(3),
    "address" TEXT,
    "phone" INTEGER,
    "comments" TEXT,
    "born" TIMESTAMP(3),
    "banned" BOOLEAN NOT NULL DEFAULT false,
    "banReason" TEXT,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "client_typeDocument_numberDocument_key" ON "client"("typeDocument", "numberDocument");

-- AddForeignKey
ALTER TABLE "city" ADD CONSTRAINT "city_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client" ADD CONSTRAINT "client_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
