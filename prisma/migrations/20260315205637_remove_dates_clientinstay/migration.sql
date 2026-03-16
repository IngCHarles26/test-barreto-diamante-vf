/*
  Warnings:

  - You are about to drop the column `dateEnd` on the `client-stay` table. All the data in the column will be lost.
  - You are about to drop the column `dateStart` on the `client-stay` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "client-stay" DROP COLUMN "dateEnd",
DROP COLUMN "dateStart";
