const express = require('express');
const router = express.Router();

router.get('/',(request,response)=>{

    console.log('Metodo GET path userorders') ;  
  
    response.send('Ready you are in userorders');
    });
    
module.exports = router;