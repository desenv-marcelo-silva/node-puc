var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended: false});
var mongoose = require('mongoose');

var adminAutoresRouter = require('./routers/adminAutoresRouter');

app.use('/admin/autores', adminAutoresRouter); 
mongoose.connect('mongodb://localhost:27017/blog');

app.set("usuario", {nome: ''});

// roteamentos
app.use('/public', express.static('./public'));

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.redirect('/artigos');
});

app.get('/artigos', (req, res) => {
    res.render('artigos', {usuario: app.get("usuario")}); // já sabe que é dentro da pasta views
});

app.get('/login', (req, res) => {
    res.render('login', {usuario: app.get("usuario")}); // já sabe que é dentro da pasta views
});

app.post('/login', urlEncodedParser, (req, res) => {
    if (req.body.email == "marcelo@gmail.com" && req.body.senha == "teste") {
        app.set("usuario", {nome: "Marcelo Silva"});
        res.redirect('admin/artigos');
    } else {
        res.render('logininvalido', {usuario: app.get("usuario")});
    }
});

app.get('/logout', (req, res) => {
    app.set("usuario", {nome: ''});
    res.redirect('/artigos');
});

app.listen(3000);