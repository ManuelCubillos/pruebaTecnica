const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/pruebatecnica',{
    useNewUrlParser:true,
})
.then(db => console.log('DB conectada'))
.catch(error => console.log('error'));


//habilitar body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//habilitar cors
app.use(cors());

app.use('/', routes());

app.listen(5000, function(){
    console.log('servidor web express en ejecucion');
});