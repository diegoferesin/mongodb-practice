'use strict'

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var app = require('./app');
var port = 3800;

mongoose.connect('mongodb://localhost:27017/mongodb_practice', {useMongoClient: true})
    .then(() => {

        console.log('MongoDB connection ok 😎');

        app.listen(port, () => {

            console.log('Server run on port 👉 ' + port);

        })

    })
    .catch(err => console.log(err));