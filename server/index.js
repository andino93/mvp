// express server
const express = require('express')
const bodyParser = require('body-parser')
const Promise = require('bluebird')
const db = require('../database/index.js')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true }))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

// TODO:
/*
  [ ] *middlware
    [x] *body parser
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
  console.log('todoooo')
  res.send('get todo')
})

app.get('/photo', (req, res) => {
  // initiate a call to unsplash api
  // respond with image url
  res.send('photo incomming')
})

app.post('/todo', (req, res) => {
  res.send('post todo')
})

app.post('/todo/edit', (req, res) => {
  // call db change with req id of post edit
  res.send('post change')
})

app.listen(3000, () => console.log('hello server be runnin on 8080'))
