'use strict';

const express = require('express');
const path = require('path')
const app = express();
const bodyParser = require('body-parser');

const messages = require('./routes/messages');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, '/../', 'node_modules')))

app.use('/messages',messages);

app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')})
})

app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// const port = process.env.PORT || 3000;
// 
// app.listen(port, () => {
//   console.log('Listening on port', port);
// });

module.exports = app;
