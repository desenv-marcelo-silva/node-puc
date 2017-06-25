var express = require('express');
var bodyParser = require('body-parser');
var urlEncoded = bodyParser.urlencoded({extended: false});

var usuarioRoute = express.Router();

usuarioRoute.get('/', (req,res) => {
    res.render('usuarios');
});

usuarioRoute.get('/novo', (req,res) => {
    res.render('novousuario');
});

usuarioRoute.post('/novo', urlEncoded, (req,res) => {
    res.json(req.body);
});
module.exports = usuarioRoute;