const request = require('request-promise')
const Promise = require('bluebird')
require('dotenv').config()
// const config = require('../config/config.js')

module.exports.unsplash = (count) => {
  let options = {
    url: `https://api.unsplash.com/photos/random/?count=${count}`,
    headers: {
      'Accept-Version': 'v1',
      'Authorization': `Client-ID ${process.env.applicationID}`
    }
  }

  return request(options)
}
