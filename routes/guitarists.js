var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('Guitarists home page')
})
// define the about route
router.get('/guitarists', function (req, res) {
  res.send('About Joe Satriani')
})

module.exports = router