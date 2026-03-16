/*
  Warnings:

  - The values [reserved] on the enum `TypeStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `cityId` on the `stay` table. All the data in the column will be lost.
  - You are about to drop the `city` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `origin` to the `stay` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TypeStatus_new" AS ENUM ('free', 'busy');
ALTER TABLE "public"."room" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "room" ALTER COLUMN "status" TYPE "TypeStatus_new" USING ("status"::text::"TypeStatus_new");
ALTER TYPE "TypeStatus" RENAME TO "TypeStatus_old";
ALTER TYPE "TypeStatus_new" RENAME TO "TypeStatus";
DROP TYPE "public"."TypeStatus_old";
ALTER TABLE "room" ALTER COLUMN "status" SET DEFAULT 'free';
COMMIT;

-- DropForeignKey
ALTER TABLE "city" DROP CONSTRAINT "city_countryId_fkey";

-- DropForeignKey
ALTER TABLE "stay" DROP CONSTRAINT "stay_cityId_fkey";

-- AlterTable
ALTER TABLE "stay" DROP COLUMN "cityId",
ADD COLUMN     "origin" TEXT NOT NULL,
ALTER COLUMN "reason" DROP NOT NULL;

-- DropTable
DROP TABLE "city";
