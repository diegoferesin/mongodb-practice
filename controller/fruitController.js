'use strict';

var Fruit = require('../model/fruitModel');

function testsGet(req, res) {
  res.status(200).send({
    message: 'Test path for my API Restful with MongoDB & Node JS',
  });
}

function createFruit(req, res) {
  var fruit = new Fruit();

  var params = req.body;

  if (params.name) {
    fruit.name = params.name;
    fruit.color = params.color;
    fruit.season = params.season;

    fruit.save((err, fruitStored) => {
      if (err) {
        res.status(500).send({
          message: 'Server Error',
        });
      } else {
        if (fruitStored) {
          res.status(200).send({
            fruta: fruitStored,
          });
        } else {
          res.status(200).send({
            message: 'It did not save fruit',
          });
        }
      }
    });
  } else {
    res.status(200).send({
      message: "Fruit's name is required",
    });
  }
}

function getFruits(req, res) {
  Fruit.find({}).exec((err, fruits) => {
    if (err) {
      res.status(500).send({
        message: 'Server Error',
      });
    } else {
      if (fruits) {
        res.status(200).send({
          Fruits: fruits,
        });
      } else {
        res.status(404).send({
          message: 'Fruits not found',
        });
      }
    }
  });
}

function getFruitsOrderByName(req, res) {
  Fruit.find({})
    .sort({ name: 1 })
    .exec((err, fruits) => {
      if (err) {
        res.status(500).send({
          message: 'Server Error',
        });
      } else {
        if (fruits) {
          res.status(200).send({
            Fruits: fruits,
          });
        } else {
          res.status(404).send({
            message: 'Fruits not found',
          });
        }
      }
    });
}

function getFruitById(req, res) {
  var fruitId = req.params.id;

  Fruit.findById(fruitId).exec((err, fruit) => {
    if (err) {
      res.status(500).send({ message: 'Server Error' });
    } else {
      if (fruit) {
        res.status(200).send({
          Fruit: fruit,
        });
      } else {
        res.status(404).send({
          message: 'Fruit not found',
        });
      }
    }
  });
}

function updateFruit(req, res) {
  var fruitId = req.params.id;
  var update = req.body;

  Fruit.findByIdAndUpdate(
    fruitId,
    update,
    { new: true },
    (err, fruitUpdate) => {
      if (err) {
        res.status(500).send({ message: 'Server Error' });
      } else {
        if (fruitUpdate) {
          res.status(200).send({
            Fruit: fruitUpdate,
          });
        } else {
          res.status(404).send({
            message: 'Fruit not found',
          });
        }
      }
    }
  );
}

function deleteFruitById(req, res) {
  var fruitId = req.params.id;

  Fruit.findByIdAndDelete(fruitId, (err, fruitDeleted) => {
    if (err) {
      res.status(500).send({ message: 'Server Error' });
    } else {
      if (fruitDeleted) {
        res.status(200).send({
          Fruit: fruitDeleted,
        });
      } else {
        res.status(404).send({
          message: 'Fruit not found',
        });
      }
    }
  });
}

module.exports = {
  testsGet,
  createFruit,
  getFruits,
  getFruitsOrderByName,
  getFruitById,
  updateFruit,
  deleteFruitById,
};
