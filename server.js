const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Configuração do CORS
app.use(cors());

// Configuração para servir arquivos estáticos
app.use(express.static(path.join(__dirname)));

// Rota padrão
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'simple.html'));
});

// Inicia o servidor
const PORT = 3000;
const IP = '0.0.0.0'; // Permite acesso externo
app.listen(PORT, IP, () => {
    console.log(`Servidor rodando em http://${IP}:${PORT}`);
    console.log('Acesse o site através do IP do seu computador na mesma rede');
});
