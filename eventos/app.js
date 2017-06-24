 const EventEmitter = require('events');

// const emissor = new EventEmitter();

// emissor.on('ola', function() {
//     console.log('evento Olá disparado.');
// });


// emissor.on('ola', () => {console.log('ola2')});

// emissor.on('ola_de_novo', (n) => {console.log('ola de novo ' + n);});
// emissor.emit('ola');
// emissor.emit('ola_de_novo', 'Marcelo');

// emissor.once('umavez', () => console.log('uma vez só'));

// emissor.emit('umavez'); // só executa uma vez com once...
// emissor.emit('umavez'); // depois disso ele é removido..
// emissor.emit('umavez'); // e portanto não executa nada após o primeiro.

// emissor.removeAllListeners();

// console.log('Todos removidos.');
// emissor.emit('ola');
// console.log('Não executou o emit.');

// // sintatic sugar
// quando utilizado dessa forma a MinhaClasse já herda tudo de EventEmitter

// class MinhaClasse extends EventEmitter {
//     // faz qualquer coisa como consultar um banco de dados ou ler arquivos texto.
        // Cuidado com o construtor...
        // constructor(){
                // super(); // chama o construtor da superclasse (EventEmitter)
                // faz alguma coisa...
        //}
// }

// const meuObj = new MinhaClasse();

// meuObj.on('acabou', () => console.log('Fim da execução.'));

// meuObj.emit('acabou');

const util = require('util');
function MinhaClasse(){
    // faz o processamento por exemplo
    EventEmitter.call(this); // chama a função construtora com esse escopo...
}
// faz com que a herança ocorra - faz a associação com o prototype
util.inherits(MinhaClasse, EventEmitter);   

const meuObj = new MinhaClasse();

var fnOla = (n) => {
    console.log('Ola ' + n)
};

meuObj.on('ola', fnOla);
meuObj.emit('ola', 'Marcelo');