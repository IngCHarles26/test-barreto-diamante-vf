-- CreateTable
CREATE TABLE "report-comments" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "report-comments_pkey" PRIMARY KEY ("id")
);
