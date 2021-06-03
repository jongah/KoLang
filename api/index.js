const express = require('express')
const mongoose = require('mongoose')

const config = require('./config/key')

const app = express()
const port = 4000;

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))

app.use(static(path.join(__dirname, 'public')));

//app.get('/', (req, res) => res.send('HelloWorld'))
app.get('/', function(req, res) {
  return res.render('test2', {
  });
});

app.get('/test', function(req, res) {
  return res.render('test2', {
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))