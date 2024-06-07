
const UserSchemas = require('../../schemas/userschemas')

const saveOneUser = function(register,callback){

    console.log('funcion SaveOneuser');

    const{nombre,correo,telefono,identificacion,marca,modelo,placa,nivelgasolina,observaciones,cambiofrenos,cambioaceite,diagnosticogeneral,alineacionbalanceo,sistemaelectrico} = register;

    const newdbregister = new UserSchemas({
        nombre: nombre,
        correo: correo,
        telefono: telefono,
        identificacion: identificacion,
        marca: marca,
        modelo: modelo,
        placa: placa,
        nivelgasolina: nivelgasolina,
        observaciones: observaciones,
        cambiofrenos: cambiofrenos,
        cambioaceite: cambioaceite,
        diagnosticogeneral: diagnosticogeneral,
        alineacionbalanceo: alineacionbalanceo,
        sistemaelectrico: sistemaelectrico
    })
    .save()
    .then((dbregister)=> {
          console.log('New user register:', dbregister);
          return callback(null,dbregister);  
    })
    .catch((error)=>{
         console.log('Error:',error);
         return callback(error);
    })
}



module.exports = {
    saveOneUser
};


