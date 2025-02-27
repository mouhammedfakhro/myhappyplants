/*
  Warnings:

  - You are about to drop the column `catalogID` on the `Wishlist` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Wishlist" DROP COLUMN "catalogID";

-- CreateTable
CREATE TABLE "WishItem" (
    "id" TEXT NOT NULL,
    "catalogID" TEXT NOT NULL,
    "wishlistID" TEXT,

    CONSTRAINT "WishItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WishItem_wishlistID_key" ON "WishItem"("wishlistID");

-- AddForeignKey
ALTER TABLE "WishItem" ADD CONSTRAINT "WishItem_wishlistID_fkey" FOREIGN KEY ("wishlistID") REFERENCES "Wishlist"("id") ON DELETE SET NULL ON UPDATE CASCADE;
