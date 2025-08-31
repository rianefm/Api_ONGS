import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Limpa a tabela de ONGs para evitar duplicatas ao rodar o script várias vezes
  await prisma.ong.deleteMany({});
  console.log('Registros antigos de ONGs foram deletados.');

  //  ONGs com dados mais completos
  await prisma.ong.createMany({
    data: [
      {
        nome: "Anjos de Patas",
        descricao: "Resgatamos, cuidamos e encontramos lares amorosos para cães e gatos em situação de rua.",
        estado: "SP",
        servicos: ["Adoção de Animais", "Voluntariado"],
        contato: "contato@anjosdepatas.org"
      },
      {
        nome: "Criança Feliz",
        descricao: "Oferecemos reforço escolar e atividades culturais para crianças em comunidades carentes.",
        estado: "RJ",
        servicos: ["Apoio à Criança", "Doação de Material Escolar"],
        contato: "contato@criancafeliz.org"
      },
      {
        nome: "Sopão Solidário",
        descricao: "Distribuímos refeições quentes para a população em situação de rua no centro da cidade.",
        estado: "SP",
        servicos: ["Distribuição de Alimentos", "Voluntariado"],
        contato: "contato@sopaosolidario.org"
      },
      {
        nome: "Mar de Esperança",
        descricao: "Promovemos a limpeza de praias e a conscientização sobre a poluição marinha.",
        estado: "RJ",
        servicos: ["Meio Ambiente", "Voluntariado"],
        contato: "contato@mardeesperanca.org"
      },
      {
        nome: "Adote um Amigo Fiel",
        descricao: "Feiras de adoção e cuidados veterinários básicos para animais de abrigos parceiros.",
        estado: "MG",
        servicos: ["Adoção de Animais"],
        contato: "contato@adoteamigofiel.org"
      },
      {
        nome: "Rede de Cuidados",
        descricao: "Acompanhamento de famílias em vulnerabilidade social, oferecendo cestas básicas e apoio psicológico.",
        estado: "DF",
        servicos: ["Assistência Social", "Apoio Psicológico"],
        contato: "contato@rededecuidados.org"
      },
      {
        nome: "Projeto Renascer",
        descricao: "Realizamos mutirões de saúde com atendimento médico e odontológico gratuito em áreas remotas.",
        estado: "RS",
        servicos: ["Atendimento Médico", "Voluntariado"],
        contato: "contato@projetorenascer.org"
      },
      {
        nome: "Esperança no Sertão",
        descricao: "Projetos de perfuração de poços e distribuição de água potável no semiárido nordestino.",
        estado: "PE",
        servicos: ["Doação de Água e Mantimentos", "Sustentabilidade"],
        contato: "contato@esperancanosertao.org"
      }
    ]
  });
  console.log('Banco de dados populado com sucesso com a lista completa de ONGs!');
}

main()
  .catch((e) => {
    console.error("Ocorreu um erro ao popular o banco de dados:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });