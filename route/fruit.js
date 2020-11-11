'use strict'

var express = require('express');
var FruitController = require('../controller/fruit');
var api = express.Router();

api.get('/testEcho', FruitController.testsGet);
api.post('/fruit', FruitController.createFruit)
api.get('/fruits', FruitController.getFruits);
api.get('/fruitsOrderByName', FruitController.getFruitsOrderByName);

module.exports = api;
