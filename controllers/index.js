const express = require('express');
const router = express.Router();


// Here the list of controllers

const userregisters = require('./userregisters');
const userorders = require('./userorders');


// Here the list of path

router.use('/userregisters',userregisters);
router.use('/userorders',userorders);

module.exports = router;