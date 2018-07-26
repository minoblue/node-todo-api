const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {Todo} = require('./models/todos');
const {User} = require('.models/users');


//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;


const app = express();


mongoose.connect('mongodb://localhost/todos');

app.use(express.static(__dirname + '/public'));

app.listen(3003,()=>{
    console.log('app listen on port 3003');
});