const createError = require('http-errors');
const Produto = require('../models/produto');

const getAllProdutos = async (req, res, next) => {
  try {
    const produtos = await Produto.findAll();
    res.json(produtos);
  } catch (err) {
    next(err);
  }
};

const getProdutoById = async (req, res, next) => {
  try {
    const produto = await Produto.findById(req.params.id);
    if (!produto) {
      throw createError(404, 'Produto não encontrado');
    }
    res.json(produto);
  } catch (err) {
    next(err);
  }
};

const createProduto = async (req, res, next) => {
  try {
    const id = await Produto.create(req.body);
    res.status(201).json({id, message: 'Produto criado com sucesso'});
  } catch (err) {
    next(err);
  }
};

const updateProduto = async (req, res, next) => {
  try {
    const result = await Produto.update(req.params.id, req.body);
    if (result === 0) {
      throw createError(404, 'Produto não encontrado');
    }
    res.json({message: 'Produto atualizado com sucesso'});
  } catch (err) {
    next(err);
  }
};

const deleteProduto = async (req, res, next) => {
  try {
    const result = await Produto.delete(req.params.id);
    if (result === 0) {
      throw createError(404, 'Produto não encontrado');
    }
    res.json({message: 'Produto excluído com sucesso'});
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllProdutos,
  getProdutoById,
  createProduto,
  updateProduto,
  deleteProduto,
};
