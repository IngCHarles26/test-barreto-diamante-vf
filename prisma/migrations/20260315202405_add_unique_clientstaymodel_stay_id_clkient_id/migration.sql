/*
  Warnings:

  - A unique constraint covering the columns `[clientId,stayId]` on the table `client-stay` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "client-stay_clientId_stayId_key" ON "client-stay"("clientId", "stayId");
