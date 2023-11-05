-- CreateTable
CREATE TABLE "Station" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "openingAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Station_pkey" PRIMARY KEY ("id")
);
