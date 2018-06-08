const express = require('express');
const app = express();
const router = express.Router();
// const request = require('request');
const cors = require('cors');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('./config');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const schemaName = new Schema({
  name: String,
  song: String,
  gain: Number,
  treble: Number,
  mid: Number,
  bass: Number,
  volume: Number,
  reverb: Number
}, {
  collection: 'guitarists'
});

const Model = mongoose.model('Model', schemaName);
mongoose.connect(config.db);

// var guitarists = require('./guitarist')

// var corsOption = {
//   origin: true,
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   exposedHeaders: ['x-auth-token']
// };
// app.use(cors(corsOption));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/guitarists', cors(), function (req, res) {
  Model.find((err, result) => {
    if (err) throw err;
    if (result) {
      res.json(result);
    } else {
      res.send(JSON.stringify({
        error: 'Error'
      }));
    }
  });
});

app.post('/send', function(req, res, next) {
  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mike.alizade@gmail.com',
        pass: 'W00dcutt3r'
      }
    })

  const mailOptions = {
    from: `${req.body.name} mike.alizade@gmail.com`,
    to: 'mike.alizade@gmail.com',
    subject: 'Guitar Amp Settings Feedback',
    text: req.body.message
  }

  transporter.sendMail(mailOptions, function(err, res) {
    if (err) {
      console.error('there was an error: ', err);
    } else {
      console.log('here is the res: ', res)
    }
  })
})

app.use(express.static(__dirname + '/public'));
app.use('/', router);

const server = app.listen(config.port, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});
