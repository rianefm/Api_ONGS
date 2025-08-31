/*
  Warnings:

  - You are about to drop the column `servico` on the `Ong` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Ong" DROP COLUMN "servico",
ADD COLUMN     "contato" TEXT,
ADD COLUMN     "descricao" TEXT,
ADD COLUMN     "servicos" TEXT[];
