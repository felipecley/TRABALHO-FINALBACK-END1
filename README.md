# Express MySQL API

Uma API RESTful construída com Express.js e MySQL.

## Requisitos

- Node.js
- MySQL

## Configuração

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure as variáveis de ambiente:
   - Copie o arquivo `.env.example` para `.env`
   - Preencha as variáveis com suas configurações

4. Configure o banco de dados:
   - Execute o script SQL em `database/schema.sql`

## Executando a aplicação

Desenvolvimento:
```bash
npm run dev
```

Produção:
```bash
npm start
```

## Endpoints

### Raiz
- `GET /` - Mensagem de boas-vindas

### Clientes
- `GET /clientes` - Lista todos os clientes
- `GET /clientes/:id` - Obtém um cliente específico
- `POST /clientes` - Cria um novo cliente
- `PUT /clientes/:id` - Atualiza um cliente
- `DELETE /clientes/:id` - Remove um cliente

### Produtos
- `GET /produtos` - Lista todos os produtos
- `GET /produtos/:id` - Obtém um produto específico
- `POST /produtos` - Cria um novo produto
- `PUT /produtos/:id` - Atualiza um produto
- `DELETE /produtos/:id` - Remove um produto

## Estrutura do Projeto

```
.
├── bin/
│   └── www
├── configs/
│   └── database.js
├── controllers/
│   ├── clienteController.js
│   └── produtoController.js
├── database/
│   └── schema.sql
├── middlewares/
│   ├── errorHandler.js
│   └── validator.js
├── models/
│   ├── cliente.js
│   └── produto.js
├── routes/
│   ├── index.js
│   ├── clientes.js
│   └── produtos.js
├── .env
├── .eslintrc.json
├── app.js
└── package.json
```