
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

module.exports = mongoose;

/*
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
*/