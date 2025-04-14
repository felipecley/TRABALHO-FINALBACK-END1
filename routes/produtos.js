const express = require('express');
const router = express.Router();
const {validateProduto} = require('../middlewares/validator');
const {
  getAllProdutos,
  getProdutoById,
  createProduto,
  updateProduto,
  deleteProduto,
} = require('../controllers/produtoController');

router.get('/', getAllProdutos);
router.get('/:id', getProdutoById);
router.post('/', validateProduto, createProduto);
router.put('/:id', validateProduto, updateProduto);
router.delete('/:id', deleteProduto);

module.exports = router;
