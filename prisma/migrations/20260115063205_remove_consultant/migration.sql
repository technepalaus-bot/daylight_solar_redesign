/*
  Warnings:

  - You are about to drop the `Consultant` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Consultant";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "SolarSubsidy" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullName" TEXT NOT NULL,
    "homeAddress" TEXT NOT NULL,
    "contactNumber" TEXT NOT NULL,
    "averagePowerBill" TEXT NOT NULL,
    "property" TEXT NOT NULL,
    "existingSolar" TEXT NOT NULL,
    "solarCount" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
