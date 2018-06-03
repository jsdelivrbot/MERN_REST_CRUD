const express = require('express');
const route = express.Router() ;
// render the view for index
route.get('/',(req,res)=>{ 
    
    res.render('index');
})



module.exports = route;