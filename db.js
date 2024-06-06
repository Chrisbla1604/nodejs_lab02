
require('dotenv').config();
const mongoose = require('mongoose');

const URL = `${process.env.MONGO_URL}`;
mongoose.connect(URL)
.then(() => {
console.log('Mongo Database connected!');
})
.catch((error) => {
    console.log('Error in Data Base:', error);
})


const user_registers = mongoose.Schema({

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
    const User_Registers = new mongoose.model('user_register',user_registers);

const new_user_register = new User_Registers({
    nombre: "Estefano",
    correo: "nodejs@bootcamp.com",
    telefono: "0923456788",
    identificacion: "0931789347",
    marca: "Nissan",
    modelo: "Duster",
    placa: "GHS-2354",
    nivelgasolina: "lleno",
    observaciones: "sin novedades",
    cambiofrenos: false,
    cambioaceite: false,
    diagnosticogeneral: false,
    alineacionbalanceo: true,
    sistemaelectrico: true
})
.save()
.then((dbregister)=> {
      console.log('New register:', dbregister);
})
.catch((error)=>{
     console.log('Error:',error);
})


User_Registers.deleteMany({
    nombre:'Christian'
} ).then((dataerased)=>{
    console.log('Object Erased:',dataerased);
})


User_Registers.find({
    nombre:'Christian', 
    identificacion:'0931789347' 
} ).then((datafound)=>{
    console.log('Object Found:',datafound);
}).catch((error)=>{
    console.log('Error:',error);
})
