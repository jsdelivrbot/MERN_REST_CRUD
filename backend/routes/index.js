const express = require('express');
const route = express.Router();
const {obj} = require('../bin/vars');
route.get('/',(req,res)=>{ 
    console.log(obj.a)
    res.render('index');
})



module.exports = route;