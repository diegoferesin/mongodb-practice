'use strict'

var express  = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargar rutas
var fruitRoutes = require('./route/fruitRoute');

// body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Configurar CORS

// Rutas Bases
app.use('/api', fruitRoutes);

module.exports = app;