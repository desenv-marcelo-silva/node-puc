var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');

var urlEncodedParser = bodyParser.urlencoded({extended: false});

router.use('/', (req, res, next) => {
    console.log(req.url);
    next();
});


// esse router pelo nome do parâmetro
// será executado para toda rota que tiver o parâmetro id
// seja ela get ou post, put, delete...
router.param('id', (req, res, next, id) => {
    var codigo1;
    if (id == 1) {
        codigo1 = "01";
    }
    switch (id) {
        case "1":
            codigo1 = "01";
            break;
        case "2":
            codigo1 = "02";
            break;
        case "3":
            codigo1 = "03";
            break;
        default:
            codigo1 = "default";
    }
    req.codigo = codigo1;
    next();
});

router.get('/:id', function(req, res) {
    res.send(`<h1>Usuário ${req.params.id}</h1>
              <h2>Codigo: ${req.codigo}</h2>`);
});

router.get('/editar/:id', function(req, res) {
    var resp = `<form method="post" 
        action="/usuarios/editar/${req.params.id}">
        <p>ID: ${req.params.id}<br />
        Nome: <input type="text" name="nome" /><br />
        e-mail: <input type="email" name="email" /><br />
        <input type="submit" /></form>`;
    res.send(resp);

});

router.post('/editar/:id', urlEncodedParser, (req, res) => {
    res.send("Usuário alterado com sucesso.");
    console.log(req.body);
});
module.exports = router;