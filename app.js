const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

var indexRouter = require('./routes/index');
var port = 8080;
var app = express();

mongoose.Promise = global.Promise;
// Connection URL
var url = 'mongodb://localhost:27017/test';
// Use connect method to connect to the Server
mongoose.connect(url).then(() => {
    console.log('Conectado - Mongo');
}).catch((_err) => {
    console.log('Error al conectar - Mongo');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', indexRouter);

app.listen(port, () => {
    console.log("Escuchando en el puerto: " +  port);
});