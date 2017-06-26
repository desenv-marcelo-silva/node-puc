var express = require('express');
var bodyParser = require('body-parser');
var urlEncoded = bodyParser.urlencoded({extended: false});

var usuarioRoute = express.Router();

var UsuarioModel = require('../models/usuariomodel');

usuarioRoute.get('/', (req,res) => {
    UsuarioModel.find( (e,u) => {
        if (e) {
            return console.error(e);
        } else {
            res.render('usuarios', {usuarios: u});
        };
    });    
});

usuarioRoute.get('/novo', (req,res) => {
    res.render('novousuario');
});

usuarioRoute.post('/novo', urlEncoded, (req,res) => {
    var usuario = new UsuarioModel({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        admin: (req.body.admin == "on")
    });

    usuario.save( (e,u) => {
        if (e) {
            return console.error(e);
        } else {
            res.render('novousuariook', {nome: usuario.nome});
        };
    });
});

usuarioRoute.get('/:id', (req,res) => {
    UsuarioModel.findById(req.params.id, (e,u) => {
        if (e) {
            return console.error(e);
        } else {
            res.render('usuariodetalhe', {usuario: u});
        };
    });   
});

module.exports = usuarioRoute;