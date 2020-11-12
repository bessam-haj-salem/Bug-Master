const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
// Set up the express app
const app = express();
const fileUpload = require('express-fileupload');
//const cors = require('cors');
const compression = require('compression');
// Log requests to the console.
app.use(logger('dev'));
app.use(express.static('public'))
// Parse incoming requests data (https://github.com/expressjs/body-parser)
//app.use(bodyParser.json({ type: 'application/json' }));
app.use(expressValidator());
app.use(bodyParser.urlencoded({extended:true}));

//app.use(bodyParser.json({ type: '*/*' }));
app.use(bodyParser());

//app.use(compression());
/*app.use(cors({
origin: ["*"],
methods: ["GET", "POST", "PUT", "DELETE"],
allowedHeaders: ["Content-Type", "Authorization","X-Requested-With"]
}));*/
//app.use(bodyParser.json({type: 'application/json',limit: '10mb', extended: true}));
//app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
// Require our routes into the application.
var path = require('path');
app.use("/uploads", express.static(path.join(__dirname, 'uploads')));
require('./server/routes/index.ts')(app);
var db = require('./server/models/db');
var dbModel = new db();
dbModel.setupDb();
// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;
