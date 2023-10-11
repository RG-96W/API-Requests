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
  id_interno: {
    type: Number,
    unique: true,
  },
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
    default: 'Novo',
  },
  responsavel: String,
  cliente: String,
  data_previsao: Date,
  comentarios: [comentarioSchema],
});

// Pré-salvar o documento para definir o ID interno automaticamente
chamadoSchema.pre('save', async function (next) {
  if (!this.id_interno) {
    // Encontre o último chamado e obtenha seu ID interno
    const ultimoChamado = await this.constructor.findOne({}, {}, { sort: { id_interno: -1 } });
    const novoIDInterno = ultimoChamado ? ultimoChamado.id_interno + 1 : 1;
    this.id_interno = novoIDInterno;
  }

  // Calcule a data de vencimento com base na prioridade
  const prioridadeDias = {
    Baixa: 2, // 48 horas
    Média: 1, // 24 horas
    Alta: 0.5, // 12 horas
  };
  const diasParaVencimento = prioridadeDias[this.prioridade] || 1; // Padrão para Média
  this.data_previsao = new Date(Date.now() + diasParaVencimento * 24 * 60 * 60 * 1000);

  next();
});

const requests = mongoose.model('Requests', chamadoSchema);

module.exports = requests;
