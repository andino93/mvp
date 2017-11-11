// express server
const express = require('express')
const bodyParser = require('body-parser')
const Promise = require('bluebird')
const db = require('../database/index.js')

const app = express()

app.use(bodyParser.urlencoded())
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

app.get('/', (req, res) => {
  res.send('hello world')
})

app.post('/', (req, res) => {
  res.send('hello world')
})

app.listen(3000, () => console.log('hello server be runnin'))
