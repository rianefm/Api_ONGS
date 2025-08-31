# Api_ONGS

## 👩🏽‍💻 Visão Geral

Esta API foi desenvolvida em JavaScript/Node.js com o objetivo de criar uma ponte entre voluntários e organizações sociais. A plataforma facilita a busca por ONGs e seus serviços, permitindo que pessoas engajadas encontrem causas para apoiar.

Utiliza **Express** para o roteamento, **Prisma** como ORM para gerenciar o banco de dados e **PostgreSQL** para a persistência dos dados.

---

## 🚀 Tecnologias

- **Node.js**: Ambiente de execução do JavaScript no servidor.
- **Express**: Framework para a construção da API e gerenciamento de rotas.
- **Prisma**: ORM para interação com o banco de dados de forma moderna e segura.
- **PostgreSQL**: Banco de dados relacional para armazenamento dos dados.
- **Nodemon**: Ferramenta para reiniciar o servidor automaticamente durante o desenvolvimento.
- **CORS**: Middleware para permitir requisições de diferentes origens.

---

## 📁 Estrutura de Pastas

```
elo-social/
├── prisma/
│   ├── migrations/
│   ├── schema.prisma   # Definição do modelo de dados e conexão com o BD
│   └── seed.mjs        # Script para popular o banco com dados iniciais
├── src/
│   ├── controller/     # Camada que recebe as requisições e envia respostas
│   ├── routes/         # Definição dos endpoints da API
│   ├── services/       # Camada com a lógica de negócio e acesso ao banco
│   └── server.js       # Arquivo principal de configuração do servidor
├── .env                # Arquivo para variáveis de ambiente
└── package.json
```

---

## 🔧 Como Rodar o Projeto

**Pré-requisitos:** Node.js instalado e um banco de dados PostgreSQL ativo.

```bash
# 1. Clonar o repositório
git clone [https://github.com/rianefm/Api_ONGS.git](https://github.com/rianefm/Api_ONGS.git)

# 2. Entrar na pasta do projeto
cd Api_ONGS

# 3. Instalar as dependências
npm install

# 4. Configurar as Variáveis de Ambiente
# Crie um arquivo chamado .env na raiz do projeto e adicione a sua
# string de conexão do PostgreSQL.
# Exemplo de .env:
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

# 5. Aplicar as Migrações do Banco de Dados
# Este comando irá criar as tabelas no seu banco com base no schema.prisma.
npx prisma migrate dev

# 6. Popular o Banco com Dados Iniciais
# Este comando executa o script prisma/seed.mjs.
node prisma/seed.mjs

# 7. Iniciar o Servidor de Desenvolvimento
npm run dev
```
Após o passo 7, a API estará rodando em `http://localhost:3000`.

---

## 📌 Funcionalidades

✅ **CRUD Completo de ONGs:** Criar, Ler, Atualizar e Deletar ONGs.
✅ **Busca Avançada:**
- Listar todas as ONGs.
- Buscar ONG por ID específico.
- Filtrar ONGs por estado (UF).
- Filtrar ONGs por tipo de serviço.
✅ **Modelo de Dados Robusto:** Suporte para que cada ONG possa ter múltiplos serviços.
✅ **Boas Práricas:** Arquitetura dividida em camadas (rotas, controllers, serviços).

---

## 🔍 Exemplos de Requisição

### ▶️ Listar todas as ONGs
**GET** `/api/ongs`

### ▶️ Buscar ONG por ID
**GET** `/api/ongs/3`

### ▶️ Listar ONGs por estado (UF)
**GET** `/api/ongs/estado/SP`

### ▶️ Buscar ONGs por tipo de serviço
**GET** `/api/ongs/servico/Voluntariado`

### ▶️ Criar uma nova ONG
**POST** `/api/ongs`  
**Content-Type:** `application/json`  
**Body:**
```json
{
  "nome": "Cuidando do Futuro",
  "descricao": "Oferecemos aulas de reforço e atividades esportivas para crianças.",
  "estado": "BA",
  "servicos": ["Apoio à Criança", "Voluntariado"],
  "contato": "contato@cuidandofuturo.org"
}
```

---

## 🔗 Endpoints da API

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `GET` | `/api/ongs` | Lista todas as ONGs cadastradas. |
| `GET` | `/api/ongs/:id` | Busca uma ONG específica pelo seu ID. |
| `GET` | `/api/ongs/estado/:uf` | Lista todas as ONGs de um determinado estado (UF). |
| `GET` | `/api/ongs/servico/:tipo`| Lista todas as ONGs que oferecem um serviço específico. |
| `POST` | `/api/ongs` | Cria uma nova ONG (dados via JSON no body). |
| `PUT` | `/api/ongs/:id` | Atualiza os dados de uma ONG existente. |
| `DELETE`| `/api/ongs/:id` | Deleta o registro de uma ONG. |

---
