

const mongoose = require('mongoose');
 
const userschemas = mongoose.Schema({

    nombre: String,
    correo: String,
    telefono: String,
    identificacion: String,
    marca: String,
    modelo: String,
    placa: String,
    nivelgasolina: String,
    observaciones: String,
    cambiofrenos: Boolean,
    cambioaceite: Boolean,
    diagnosticogeneral: Boolean,
    alineacionbalanceo: Boolean,
    sistemaelectrico: Boolean

    });
    const UserSchemas = new mongoose.model('userschema',userschemas);

module.exports = UserSchemas;