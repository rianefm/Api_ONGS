# Api_ONGS

## 👩🏽‍💻 Visão Geral

Esta API foi desenvolvida em JavaScript/Node.js com o objetivo de facilitar a busca por ONGs e seus serviços, auxiliando pessoas, abrigos e animais.

Utiliza Express para o roteamento e manipulação de requisições HTTP, e possui um banco de dados mockado (em memória).

---

## 🚀 Tecnologias

- Node.js  
- Express  
- JavaScript  
- Nodemon  

---

## 📁 Estrutura de Pastas

```
src/  
├── controller/     # Funções que controlam as ações da API  
├── model/          # Modelo e base de dados mockada das ONGs  
├── routes/         # Definição das rotas da API  
└── server.js       # Arquivo principal do servidor  
```

---

## 🔧 Como rodar o projeto

```bash
# Clonar o repositório
git clone https://github.com/rianefm/Api_ONGS.git

# Entrar na pasta do projeto
cd Api_ONGS

# Instalar as dependências
npm install

# Iniciar o servidor
npm start
```

---

## 📌 Funcionalidades

✅ Criar ONG (rota POST)  
✅ Listar todas as ONGs  
✅ Buscar ONG por ID  
✅ Listar ONGs por estado (UF)  
✅ Listar ONGs por tipo de serviço  
✅ Suporte a serviços de ajuda humanitária e proteção animal  

---

## 🔍 Exemplos de Requisição

### ▶️ Listar todas as ONGs  
**GET** `/api/ongs`

### ▶️ Buscar ONG por ID  
**GET** `/api/ongs/3`

### ▶️ Listar ONGs por estado (UF)  
**GET** `/api/ongs/estado/SP`

### ▶️ Buscar ONGs por tipo de serviço  
**GET** `/api/ongs/servico/adoção`

### ▶️ Criar uma nova ONG  
**POST** `/api/ongs`  
**Content-Type:** application/json  
**Body:**
```json
{
  "id": 8,
  "nome": "Ajuda Humanitária Brasil",
  "estado": "GO",
  "servico": "distribuição de alimentos"
}
```

---

## 🔗 Endpoints da API

| Método | Rota                       | Descrição                             |
|--------|----------------------------|----------------------------------------|
| GET    | `/api/ongs`                | Lista todas as ONGs                    |
| GET    | `/api/ongs/:id`            | Busca ONG por ID                       |
| GET    | `/api/ongs/estado/:uf`     | Lista ONGs por estado (UF)             |
| GET    | `/api/ongs/servico/:tipo`  | Lista ONGs por tipo de serviço         |
| POST   | `/api/ongs`                | Cria uma nova ONG (via JSON no body)   |

---
