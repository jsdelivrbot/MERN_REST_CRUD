const express = require('express');
const route = express.Router() ;

route.get('/',(req,res)=>{
    res.send('hello api we are here!')
})


module.exports = route;