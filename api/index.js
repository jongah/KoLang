const express = require('express')
const mongoose = require('mongoose')

const config = require('./api/config/key')

const app = express()
const port = 4000;

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))

app.get('/', (req, res) => res.send('HelloWorld'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))