/*
  Warnings:

  - You are about to drop the column `userId` on the `Reminder` table. All the data in the column will be lost.
  - Added the required column `catalogID` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toBeWatered` to the `Plant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Reminder" DROP CONSTRAINT "Reminder_userId_fkey";

-- AlterTable
ALTER TABLE "Plant" ADD COLUMN     "catalogID" TEXT NOT NULL,
ADD COLUMN     "toBeWatered" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Reminder" DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "tagName" TEXT NOT NULL,
    "plantId" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_plantId_fkey" FOREIGN KEY ("plantId") REFERENCES "Plant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
