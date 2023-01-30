-- CreateTable
CREATE TABLE "genders" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "genders_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movie" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "platform" INTEGER NOT NULL,
    "gender" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "note" TEXT,

    CONSTRAINT "movie_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "platforms" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "platforms_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "genders_name_key" ON "genders"("name");

-- CreateIndex
CREATE UNIQUE INDEX "platforms_name_key" ON "platforms"("name");

-- AddForeignKey
ALTER TABLE "movie" ADD CONSTRAINT "Movie_fk0" FOREIGN KEY ("platform") REFERENCES "platforms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "movie" ADD CONSTRAINT "Movie_fk1" FOREIGN KEY ("gender") REFERENCES "genders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
