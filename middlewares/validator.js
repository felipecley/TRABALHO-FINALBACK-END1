const createError = require('http-errors');

const validateCliente = (req, res, next) => {
  const {nome, sobrenome, email, idade} = req.body;

  if (!nome || !sobrenome || !email || !idade) {
    return next(createError(400, 'Todos os campos são obrigatórios'));
  }

  if (typeof idade !== 'number' || idade < 0) {
    return next(createError(400, 'Idade deve ser um número positivo'));
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return next(createError(400, 'Email inválido'));
  }

  next();
};

const validateProduto = (req, res, next) => {
  const {nome, descricao, preco} = req.body;

  if (!nome || !descricao || !preco) {
    return next(createError(400, 'Todos os campos são obrigatórios'));
  }

  if (typeof preco !== 'number' || preco <= 0) {
    return next(createError(400, 'Preço deve ser um número positivo'));
  }

  next();
};

module.exports = {
  validateCliente,
  validateProduto,
};
