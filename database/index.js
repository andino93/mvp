// mongo and mongoose db connection

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/toDoMvp', {useMongoClient: true});

const db = mongoose.connection
