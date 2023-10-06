// controllers/requestsController.js
const Request = require('../models/request.js');

// Controlador para criar uma nova solicitação
exports.createRequest = async (req, res) => {
  try {
    const request = new Request(req.body);
    await request.save();
    res.status(201).json(request);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Controlador para listar todas as solicitações
exports.getAllRequests = async (req, res) => {
  try {
    const requests = await Request.find();
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para obter detalhes de uma solicitação específica
exports.getRequestById = async (req, res) => {
  try {
    const request = await Request.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ error: 'Solicitação não encontrada' });
    }
    res.json(request);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para atualizar uma solicitação
exports.updateRequest = async (req, res) => {
  try {
    const request = await Request.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!request) {
      return res.status(404).json({ error: 'Solicitação não encontrada' });
    }
    res.json(request);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para excluir uma solicitação
exports.deleteRequest = async (req, res) => {
  try {
    const request = await Request.findByIdAndDelete(req.params.id);
    if (!request) {
      return res.status(404).json({ error: 'Solicitação não encontrada' });
    }
    res.json({ message: 'Solicitação excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
