var express = require('express');
var app = express();

var usuarios = require('./routes/usuarios.js');

app.set('view engine', 'ejs');

app.use('/usuarios', usuarios);

app.get('/', (req,res) => {
    res.render('index');
});

app.listen(3000);
