const express = require('express');
const router = express.Router();
const {validateCliente} = require('../middlewares/validator');
const {
  getAllClientes,
  getClienteById,
  createCliente,
  updateCliente,
  deleteCliente,
} = require('../controllers/clienteController');

router.get('/', getAllClientes);
router.get('/:id', getClienteById);
router.post('/', validateCliente, createCliente);
router.put('/:id', validateCliente, updateCliente);
router.delete('/:id', deleteCliente);

module.exports = router;
