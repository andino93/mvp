// mongo and mongoose db connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/toDoMvp', {useMongoClient: true});

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', () => console.log('mon mon mongoooseee'))

const ToDoSchema = mongoose.model('todo', {
  task: String,
  isDone: Boolean,

})

//TODO:
// save function
// change isDone status function
// read function
// delete function
// export functions

const save = () => {

}
