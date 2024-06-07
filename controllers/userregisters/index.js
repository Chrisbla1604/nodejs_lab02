const express = require('express');
const router = express.Router();

router.get('/',(request,response)=>{

    console.log('Metodo GET path /api') ;  
    console.log('Pais:',request.user);
    response.render('ejs/servercarshop/index');
    });
    
    
    
//Here the models
const userregisters = require('../../models/userregisters')


router.post('/save',(request,response)=>{
    
    console.log('Metodo POST userregisters') ;

    //const  register  = request.body;

    return userregisters.saveOneUser(request.body, (error,result)=>
    {

      if(error){
         response.status(500).json({message:'Server error'})
      }

      return response.json({code:'OK', message:'Data save successful'})

    });

});

module.exports = router;