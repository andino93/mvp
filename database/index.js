// mongo and mongoose db connection
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.Promise = require('bluebird')
const options = { promiseLibrary: require('bluebird'), useMongoClient: true }

mongoose.connect(process.env.database, options)
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', () => console.log('mon mon mongoooseee'))

const ToDoSchema = mongoose.Schema({
  task: String,
  isDone: Boolean
})

const Todo = mongoose.model('todoItem', ToDoSchema)

module.exports.saveTodo = (object) => {
  let newTodo = new Todo(object)
  return newTodo.save()
}

module.exports.editTodo = (id, editedTask) => {
  // change todo at id with edited editedTask
  return new Promise((resolve, reject) => {
    Todo.findByIdAndUpdate(id, editedTask, (err, success) => {
      if (err) reject(err)
      else resolve(success)
    })
  })
}

module.exports.deleteTodo = (id) => {
  return new Promise((resolve, reject) => {
    Todo.findByIdAndRemove(id, (err, success) => {
      if (err) reject(err)
      else resolve(success)
    })
  })
}

module.exports.read = () => {
  return Todo.find()
}
