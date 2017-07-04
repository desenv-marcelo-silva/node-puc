var express = require('express');
var app = express();

// roteamentos
app.use('/public', express.static('./public'));

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.redirect('/artigos');
});

app.get('/artigos', (req, res) => {
    res.render('artigos'); // já sabe que é dentro da pasta views
});

app.listen(3000);