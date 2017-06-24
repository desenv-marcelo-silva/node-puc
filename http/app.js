var http = require('http');
const fs = require('fs');

http.createServer(function(req, res){

    // res.writeHead(200, {"Content-Type": "text/plain"}); // text/html, application/json, application/text
    // res.write('<meta charset="utf-8" />');
    // res.write('<h1>NodeJS</h1>');
    // res.write('<p>Olá mundo!</p>');
    // res.end("<p>Fim com end</p>");
    
    // res.writeHead(200, {"Content-Type": "application/json"}); // text/html, application/json, application/text
    // res.end(JSON.stringify({"codigo": "3", "descricao": "Geladeira"}));
    if (req.url === "/") {
        var pagina = fs.readFileSync('./index.html', 'utf8');
        pagina = pagina.replace('{mensagem}', 'Mensagem trocada!');
        res.end(pagina);
    } else if (req.url === "/clientes") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end("<h1>Clientes</h1>");
    } else if (req.url === "/produtos") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end("<h1>Produtos</h1>");
    } else {
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write("<meta charset='utf8' />");
        res.end("<h1>404 - Página não encontrada.</h1>");
    }
}).listen(8008);

console.log('Servidor rodando em 8008');
