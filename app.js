const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requestsRouter = require('./src/routes/requests.js'); // Importe a rota

mongoose.connect('mongodb+srv://admin:admin@rwrequests.3ywnd74.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexão com o Requests DB estabelecida'))
  .catch(err => console.error('Erro na conexão com o Requests DB:', err));

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use a rota de requests
app.use('/requests', requestsRouter); // Roteie as solicitações para /requests para o requestsRouter

const HOST = '127.0.0.1';
const PORT = process.env.PORT || 51000;

app.listen(PORT,() => {
  console.log(`Servidor rodando em http://${HOST}:${PORT}`);
});
