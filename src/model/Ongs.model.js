//Class  com o id, nome, estado e serviço  referente a ong 

class Ongs {
  constructor(id, nome, estado, servico) {
    this.id = id;
    this.nome = nome;
    this.estado = estado;
    this.servico = servico;
  }

  showOng() {
    return `id:${this.id}, nome: ${this.nome}, estado: ${this.estado}, serviço oferecido: ${this.servico}`;
  }
}

// Banco de dados mockado 
const listaOngs = [
  new Ongs(1, "Amor Animal", "SP", "resgate"),
  new Ongs(2, "Patinhas do Bem", "RJ", "adoção"),
  new Ongs(3, "Vida Pet", "MG", "vacinação"),
  new Ongs(4, "Cão Feliz", "SP", "adoção"),
  new Ongs(5, "Ajuda Bichinhos", "RS", "resgate"),
  new Ongs(6, "Lar dos Peludos", "BA", "abrigo"),
  new Ongs(7, "Anjos de Quatro Patas", "PR", "vacinação"),

  // ONGs de ajuda humanitária
  new Ongs(8, "Solidariedade Viva", "SP", "distribuição de alimentos"),
  new Ongs(9, "Amparo Urbano", "RJ", "assistência a moradores de rua"),
  new Ongs(10, "Esperança no Sertão", "PE", "doação de água e mantimentos"),
  new Ongs(11, "Casa de Todos", "MG", "abrigo temporário"),
  new Ongs(12, "Vida Digna", "BA", "apoio a refugiados"),
  new Ongs(13, "Rede de Cuidados", "DF", "acompanhamento de famílias carentes"),
  new Ongs(14, "Projeto Renascer", "RS", "atendimento médico gratuito"),
  new Ongs(15, "Coração Solidário", "CE", "apoio psicológico"),
];

export { Ongs, listaOngs };

