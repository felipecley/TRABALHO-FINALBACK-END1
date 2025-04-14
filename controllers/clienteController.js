const createError = require('http-errors');
const Cliente = require('../models/cliente');

const getAllClientes = async (req, res, next) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (err) {
    next(err);
  }
};

const getClienteById = async (req, res, next) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      throw createError(404, 'Cliente não encontrado');
    }
    res.json(cliente);
  } catch (err) {
    next(err);
  }
};

const createCliente = async (req, res, next) => {
  try {
    const id = await Cliente.create(req.body);
    res.status(201).json({id, message: 'Cliente criado com sucesso'});
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      next(createError(400, 'Email já cadastrado'));
    } else {
      next(err);
    }
  }
};

const updateCliente = async (req, res, next) => {
  try {
    const result = await Cliente.update(req.params.id, req.body);
    if (result === 0) {
      throw createError(404, 'Cliente não encontrado');
    }
    res.json({message: 'Cliente atualizado com sucesso'});
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      next(createError(400, 'Email já cadastrado'));
    } else {
      next(err);
    }
  }
};

const deleteCliente = async (req, res, next) => {
  try {
    const result = await Cliente.delete(req.params.id);
    if (result === 0) {
      throw createError(404, 'Cliente não encontrado');
    }
    res.json({message: 'Cliente excluído com sucesso'});
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllClientes,
  getClienteById,
  createCliente,
  updateCliente,
  deleteCliente,
};
