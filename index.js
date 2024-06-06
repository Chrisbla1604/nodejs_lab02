


const express = require('express');
const engine = require('ejs-locals');
const port =3005;
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

// Use the session middleware

app.use(session({
    secret: 'Bootcamp2024ESPOL',
    cookie: { maxAge: 60000 }
})); 
    

app.use('/',express.static(__dirname+'/public'));
app.engine('ejs', engine);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use((request,response,next) => {
    console.log('Entra al middleware 1');

    console.log('Body indefined:',request.body);

    request.user ={
        curso:'Bootcamp',
        pais: 'Ecuador'
    };
    
    next();
});

app.use(bodyParser.json({ type: 'application/json' }))


app.get('/api',(request,response)=>{

console.log('Metodo GET path /api') ;  
console.log('Pais:',request.user);
response.render('ejs/servercarshop/index');
});


app.post('/api',(request,response)=>{

console.log('Metodo POST path /api') ;

request.body.product.type= 'vegetable';
request.body.parser=true;
console.log(request.body) ;
response.json(request.body);
});





app.listen(port,() => console.log( `Puerto escuchando ${port} `));