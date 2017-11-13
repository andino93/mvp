// express server
const express = require('express')
const bodyParser = require('body-parser')
const Promise = require('bluebird')
const db = require('../database/index.js')
const api = require('./unsplash.js')
const expressSession = require('express-session')
const session = require('cookie-session')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.set('trust proxy', 1)
app.use(session({
  name: 'session',
  secret: 'tododolist',
  maxAge: 24 * 60 * 60 * 1000
}))

app.get('/', (req, res) => res.send('please use proper endpoint'))

app.get('/todo', (req, res) => {
  console.log(req.session)
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
