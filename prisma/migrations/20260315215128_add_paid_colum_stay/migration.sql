/*
  Warnings:

  - Added the required column `paidUntil` to the `stay` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "stay" ADD COLUMN     "paidUntil" TIMESTAMP(3) NOT NULL;
