/*
  Warnings:

  - The `description` column on the `StudyItem` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "StudyItem" ADD COLUMN     "descriptionText" TEXT,
DROP COLUMN "description",
ADD COLUMN     "description" JSON;
