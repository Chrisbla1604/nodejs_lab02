


const express = require('express');
const engine = require('ejs-locals');
const port =3005;
const app = express();

app.use('/',express.static(__dirname+'/public'));
app.engine('ejs', engine);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/api',(request,response)=>{

response.render('ejs/servercarshop/index');
});




app.listen(port,() => console.log( `Puerto escuchando ${port} `));