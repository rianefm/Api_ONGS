import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.ong.createMany({
    data: [
      { nome: "Amor Animal", estado: "SP", servico: "resgate" },
      { nome: "Patinhas do Bem", estado: "RJ", servico: "adoção" },
      { nome: "Vida Pet", estado: "MG", servico: "vacinação" },
      { nome: "Cão Feliz", estado: "SP", servico: "adoção" },
      { nome: "Ajuda Bichinhos", estado: "RS", servico: "resgate" },
      { nome: "Lar dos Peludos", estado: "BA", servico: "abrigo" },
      { nome: "Anjos de Quatro Patas", estado: "PR", servico: "vacinação" },
      { nome: "Solidariedade Viva", estado: "SP", servico: "distribuição de alimentos" },
      { nome: "Amparo Urbano", estado: "RJ", servico: "assistência a moradores de rua" },
      { nome: "Esperança no Sertão", estado: "PE", servico: "doação de água e mantimentos" },
      { nome: "Casa de Todos", estado: "MG", servico: "abrigo temporário" },
      { nome: "Vida Digna", estado: "BA", servico: "apoio a refugiados" },
      { nome: "Rede de Cuidados", estado: "DF", servico: "acompanhamento de famílias carentes" },
      { nome: "Projeto Renascer", estado: "RS", servico: "atendimento médico gratuito" },
      { nome: "Coração Solidário", estado: "CE", servico: "apoio psicológico" },
    ],
  });

  console.log('ONGs inseridas com sucesso!');
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
