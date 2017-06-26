var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    nome: String,
    email: String,
    senha: String,
    admin: Boolean
});

var UsuarioModel = mongoose.model('Usuario', usuarioSchema);

module.exports = UsuarioModel;