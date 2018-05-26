const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  /* res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); */
  res.render('index', { title: '' });
  next();
});

module.exports = router;
