/*
  Warnings:

  - You are about to drop the column `id_token` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `repetitionNumber` on the `StudyRepetition` table. All the data in the column will be lost.
  - You are about to drop the column `scheduledAt` on the `StudyRepetition` table. All the data in the column will be lost.
  - Added the required column `due` to the `StudyRepetition` table without a default value. This is not possible if the table is not empty.
  - Made the column `difficulty` on table `StudyRepetition` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "FSRSState" AS ENUM ('NEW', 'LEARNING', 'REVIEW', 'RELEARNING');

-- DropIndex
DROP INDEX "StudyRepetition_scheduledAt_idx";

-- DropIndex
DROP INDEX "StudyRepetition_studyItemId_repetitionNumber_key";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "id_token",
ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Session" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "StudyRepetition" DROP COLUMN "repetitionNumber",
DROP COLUMN "scheduledAt",
ADD COLUMN     "due" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "lapses" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "lastReview" TIMESTAMP(3),
ADD COLUMN     "reps" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "stability" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
ADD COLUMN     "state" "FSRSState" NOT NULL DEFAULT 'NEW',
ALTER COLUMN "difficulty" SET NOT NULL,
ALTER COLUMN "difficulty" SET DEFAULT 0.0,
ALTER COLUMN "difficulty" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "updatedAt" DROP DEFAULT,
ALTER COLUMN "emailVerified" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Verification" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- CreateIndex
CREATE INDEX "StudyRepetition_due_idx" ON "StudyRepetition"("due");
