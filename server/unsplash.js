const request = require('request-promise')
const Promise = require('bluebird')
const config = require('../config/config.js')

const unsplash = (count) => {
  let options = {
    url: `https://api.unsplash.com/photos/random/?count=${count}`,
    headers: {
      'Accept-Version': 'v1',
      'Authorization': `Client-ID ${config.applicationID}`
    }
  }

  return request(options)
}

module.exports.unsplash = unsplash
