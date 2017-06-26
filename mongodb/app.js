var express = require('express');
var mongoose = require('mongoose');
var app = express();

var usuarios = require('./routes/usuarios.js');

mongoose.connect("mongodb://localhost:27017/teste")

app.set('view engine', 'ejs');

app.use('/usuarios', usuarios);

app.get('/', (req,res) => {
    res.render('index');
});

app.listen(3000);
