// importando express para criarmos o servidor web
const express = require('express');

// importanto multer para aceitar upload de arquivos
const multer = require('multer');

// importando nosso pacote do ocr com as funcoes de extracao
const ocr = require('./google-ocr');

// criando uma instancia do servidor web
const app = express();

// configurando o destino dos uploads 
const upload = multer({ dest: './upload' });

// definindo uma view engine para trabalharmos a interface grafica
app.set('view engine', 'ejs');

// definindo uma rota para acessarmos a pagina index.ejs
app.get('/dio/ocr/demo', function (req, res) {
    // renderiza a pagina index.ejs que fica dentro de views
    res.render('index');
});

// definindo uma rota para extrairmos os dados a partir do upload
app.post('/dio/ocr/demo', upload.single('file'), async function (req, res) {
    // chama a funcao de extract do ocr
    const response = await ocr.extract(req.file.path, req.file.mimetype);
    // devolve a resposta para o browser
    res.send(response);
})

// setando o servidor para escutar na porta 3000
app.listen(3000, function () {
    // log para saber que o servidor esta no ar
    console.log('Tá no ar na porta 3000');
});