'use strict';

var express = require('express');
var FruitController = require('../controller/fruitController');
var api = express.Router();

api.get('/testEcho', FruitController.testsGet);
api.post('/fruit', FruitController.createFruit);
api.get('/fruits', FruitController.getFruits);
api.get('/fruitsOrderByName', FruitController.getFruitsOrderByName);
api.get('/fruit/:id', FruitController.getFruitById);
api.put('/fruit/:id', FruitController.updateFruit);
api.delete('/fruit/:id', FruitController.deleteFruitById);
module.exports = api;
