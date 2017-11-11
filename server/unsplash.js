const request = require('request-promise')
const Promise = require('bluebird')
const config = require('../config/config.js')

const unsplash = () => {
  let options = {
    url: `https://api.unsplash.com/photos/random/`,
    headers: {
      'Accept-Version': 'v1',
      'Authorization': `Client-ID ${config.applicationID}`
    }
  }

  return request(options)
}

module.exports.unsplash = unsplash
