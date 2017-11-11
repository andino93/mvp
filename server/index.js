// express server
const express = require('express')
const bodyParser = require('body-parser')
const Promise = require('bluebird')
const db = require('../database/index.js')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

// TODO:
/*
  [ ] *middlware
    [ ] *body parser
    [ ] *session tokens (if time)

  [ ] *get routes
    [ ] *route for todos
    [ ] *routes for photos
  [ ] *post routes
    [ ] *new todo items
    [ ] *edit a todo item

*/
app.get('/', (req, res) => res.send('please use proper endpoint'))

app.get('/todo', (req, res) => {
  res.send('get todo')
})

app.get('/photo', (req, res) => {
  res.send('get photo')
})

app.post('/todo', (req, res) => {
  res.send('post todo')
})

app.listen(3000, () => console.log('hello server be runnin'))
