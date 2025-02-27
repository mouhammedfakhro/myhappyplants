-- CreateTable
CREATE TABLE "Wishlist" (
    "id" TEXT NOT NULL,
    "catalogID" TEXT NOT NULL,
    "userID" TEXT,

    CONSTRAINT "Wishlist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Wishlist_userID_key" ON "Wishlist"("userID");

-- AddForeignKey
ALTER TABLE "Wishlist" ADD CONSTRAINT "Wishlist_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
