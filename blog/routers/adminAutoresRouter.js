var express = require('express');
var autoresRouter = express.Router();

var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended: false});

var AutorModel = require('../models/autorModel');

autoresRouter.get('/novo', (req, res) => {
    // admin é a pasta dentro de views
    res.render('admin/novoautor', {usuario: req.app.get('usuario')}); 
});

autoresRouter.post('/novo', urlEncodedParser, (req, res) => {
    var autor = new AutorModel({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        admin: (req.body.admin == "on")
    });

    autor.save((erro, autorGravado) => {
        if (erro) {
            return console.error(erro);
        }
        res.render('admin/autorincluido', {usuario: req.app.get('usuario')});
    });
});

module.exports = autoresRouter;