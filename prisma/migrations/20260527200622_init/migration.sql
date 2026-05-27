-- CreateTable
CREATE TABLE "Shabad" (
    "id" SERIAL NOT NULL,
    "raag" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "angNumber" INTEGER NOT NULL,

    CONSTRAINT "Shabad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Verse" (
    "id" SERIAL NOT NULL,
    "shabadId" INTEGER NOT NULL,
    "verseNumber" INTEGER NOT NULL,
    "gurmukhiText" TEXT NOT NULL,
    "devanagariText" TEXT,
    "englishTranslation" TEXT,

    CONSTRAINT "Verse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Commentary" (
    "id" SERIAL NOT NULL,
    "verseId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "scholarSource" TEXT NOT NULL,

    CONSTRAINT "Commentary_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Verse" ADD CONSTRAINT "Verse_shabadId_fkey" FOREIGN KEY ("shabadId") REFERENCES "Shabad"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commentary" ADD CONSTRAINT "Commentary_verseId_fkey" FOREIGN KEY ("verseId") REFERENCES "Verse"("id") ON DELETE CASCADE ON UPDATE CASCADE;
