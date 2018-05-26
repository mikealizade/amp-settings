var express = require('express')
var app = express();
var router = express.Router()
var request = require('request')
var cors = require('cors')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schemaName = new Schema({
  name: String,
  song: String,
  gain: Number,
  treble: Number,
  mid: Number,
  bass: Number,
  volume: Number,
  reverb: Number
}, {
	collection: 'ampsettings'
});

var Model = mongoose.model('Model', schemaName);
mongoose.connect('mongodb://localhost:27017/ampsettings');

//var guitarists = require('./guitarist')

// var corsOption = {
//   origin: true,
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   exposedHeaders: ['x-auth-token']
// };
// app.use(cors(corsOption));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', cors(), function(req, res) {
	Model.find((err, result) =>  {
		if (err) throw err;
		if (result) {
			res.json(result)
		} else {
			res.send(JSON.stringify({
				error : 'Error'
			}))
		}
	})
})

router.route('/health-check').get(function(req, res) {
  res.status(200);
  res.send('Hello World');
});

app.use('/', router);

const server = app.listen(3001, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
