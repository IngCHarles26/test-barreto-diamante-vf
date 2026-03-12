-- CreateEnum
CREATE TYPE "TypeStatus" AS ENUM ('free', 'busy', 'reserved');

-- AlterTable
ALTER TABLE "room" ADD COLUMN     "status" "TypeStatus" NOT NULL DEFAULT 'free';
