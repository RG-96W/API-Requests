// routes/requests.js
const express = require('express');
const router = express.Router();
const requestsController = require('../controllers/requests');

// Rota para criar uma nova solicitação
router.post('/', requestsController.createRequest);

// Rota para listar todas as solicitações
router.get('/', requestsController.getAllRequests);

// Rota para obter detalhes de uma solicitação específica
router.get('/:id', requestsController.getRequestById);

// Rota para atualizar uma solicitação
router.put('/:id', requestsController.updateRequest);

// Rota para excluir uma solicitação
router.delete('/:id', requestsController.deleteRequest);

module.exports = router;
