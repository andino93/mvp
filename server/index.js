// express server
const express = require('express')
const bodyParser = require('body-parser')
const Promise = require('bluebird')
const db = require('../database/index.js')
const api = require('./unsplash.js')
const expressSession = require('express-session')
const session = require('express-sessions')
const mongoose = require('mongoose')


const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
  next()
})
app.use(expressSession({
  secret: 'tododolist',
  cookie: {maxAge: 2628000000},
  store: new session({
    storage: 'mongodb',
    instance: mongoose,
    host: 'localhost',
    db: 'toDoMvp',
    collection: 'sessions',
    expire: 86400
  })
}))

app.get('/', (req, res) => res.send('please use proper endpoint'))

app.get('/todo', (req, res) => {
  db.read()
  .then(list => res.json(list))
  .catch(err => console.error(err))
})

app.post('/todo', (req, res) => {
  db.saveTodo(req.body)
  .then(result => res.json(result._id))
  .catch(err => res.json(err))
})

app.post('/todo/delete', (req, res) => {
  db.deleteTodo(req.body._id)
  .then(result => res.json(result))
  .catch(err => console.error(err))
})

app.put('/todo', (req, res) => {
  db.editTodo(req.body.id, req.body.edit)
  .then(result => res.json(result))
  .catch(err => console.error(err))
})

app.get('/photo', (req, res) => {
  api.unsplash(1)
  .then(photos => res.json(photos))
  .catch(err => console.error(err))
})

app.listen(3000, () => console.log('hello server be runnin on 3000'))
