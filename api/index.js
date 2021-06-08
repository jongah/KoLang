const express = require('express')
const mongoose = require('mongoose')

const config = require('./config/key')

const app = express()
const port = 4000;
const path = require("path");

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))

//======================================================================================
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'public')));
//app.use('/process', express.static(__dirname + '/public'));
//app.get('/', (req, res) => res.send('HelloWorld'))
app.get('/', function(req, res) {
  return res.render('main', {
  });
});

app.post('/test', function(req, res) {
  return res.render('test', {
  });
});

app.get('/logintest', function(req, res) {
  return res.render('loginTest', {
  });
});
//=============================================================================================
app.listen(port, () => console.log(`Example app listening on port ${port}!`))