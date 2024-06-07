


const express = require('express');
const engine = require('ejs-locals');
const port =3005;
const app = express();
const controllers = require('./controllers');
const bodyParser = require('body-parser');
const session = require('express-session');
const compression = require('compression');
const db =require('./database/db');

// Use the session middleware

app.use(session({
    secret: 'Bootcamp2024ESPOL',
    cookie: { maxAge: 60000 }
})); 
    

app.use('/',express.static(__dirname+'/public'));
app.engine('ejs', engine);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json({ type: 'application/json' }));

//app.use(compression);

//routing a controlares

app.use('/',controllers);


app.listen(port,() => console.log( `Puerto escuchando ${port} `));