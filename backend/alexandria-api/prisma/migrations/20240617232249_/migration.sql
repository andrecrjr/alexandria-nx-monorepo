-- AlterTable
ALTER TABLE "Content" ADD COLUMN     "synonyms" TEXT[],
ALTER COLUMN "numberPages" DROP NOT NULL;
