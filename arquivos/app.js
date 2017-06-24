const fs = require('fs');

var arquivo = fs.readFileSync('./ola.txt', 'utf8');
console.log(arquivo);

fs.readFile('./ola.txt', 'utf8', (erro,dados) => { console.log(dados);});

fs.writeFileSync('ola2.txt', 'Marcelo usando writeFileSync do fs node.js\n', 'utf8');