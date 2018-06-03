const express = require('express');
const exphbs = require('express-handlebars');
const indexRoute = require('./routes/index');
const albumRoute = require('./routes/albums');
const {www,express_views} = require('../bin/config/paths')
const { sanitizeBody } = require('express-validator/filter');

const mongoose = require('mongoose');

const port =  process.env.PORT||8000;

const path= require('path')



const mongoDB = 'mongodb://'+process.env.dbUsert+':'+process.env.dbPassword+'@ds127490.mlab.com:27490/crud';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

console.log("connected",mongoose);
const app = express();
app.engine('hbs',exphbs({ extname: '.hbs'}));
app.set('views',express_views);
app.set('view engine','hbs');


app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use('/',indexRoute);
app.use('/album',albumRoute);


app.use(express.static(www))


app.listen(port,()=>{console.log(`server started ${port}`);});