
require('dotenv').config();
const mongoose = require('mongoose');

const URL = `${process.env.MONGO_URL}`;
mongoose.connect(URL)
.then(() => {
console.log('Mongo Database connected!');
})