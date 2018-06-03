const express = require('express');

// render the view for index
route.get('/',(req,res)=>{ 
    
    res.render('index');
})



module.exports = route;