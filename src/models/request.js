
const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
  data: {
    type: Date,
    default: Date.now,
  },
  autor: String,
  texto: String,
});

const chamadoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  data_abertura: {
    type: Date,
    default: Date.now,
  },
  prioridade: {
    type: String,
    enum: ['Baixa', 'Média', 'Alta'],
    default: 'Média',
  },
  esforco: {
    type: String,
    enum: ['Baixo', 'Médio', 'Alto'],
    default: 'Médio',
  },
  status: {
    type: String,
    enum: ['Novo', 'Em Atendimento', 'Bloqueado', 'Fechado'],
    default: 'Aberto',
  },
  responsavel: String,
  cliente: String,
  data_previsao: Date,
  comentarios: [comentarioSchema],
});

const requests = mongoose.model('Requests', chamadoSchema);

module.exports = requests;
