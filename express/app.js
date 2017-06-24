// versões nas dependências do package.json
// ^2.14.1
//  ^ ^  ^
//  | |  +-- É a versão patch - somente correções
//  | +----- É a versão minor - teve inserção de novas funcionalidades
//  +------- É a versão major - mudança brusca - pode perder recursos 
// ^ = O circunflexo significa que pode ser feita atualizações automáticas
// ~ = Somente atualização de correções
// Os dois casos são atualizados com o npm update;


// const moment = require('moment');
// moment.locale('pt-BR');
// console.log(moment().format('LTS'));




var http = require('http');

http.createServer( (req, res) => {

    res.writeHead(200, {"Content-Type": "text/html"}); // text/html, application/json, application/text
    res.write('<meta charset="utf-8" />');
    res.write('<h1>NodeJS</h1>');
    res.end('<p>Olá mundo com nodemon dando refresh sem reiniciar o servidor manualmente.</p>');
    
}).listen(8008);

console.log('Servidor rodando em 8008');
