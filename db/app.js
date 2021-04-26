const mongoose = require('mongoose');
// mongodb location
mongoose.connect('mongodb://localhost:27017/spot'); 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	console.log("mongo db connection OK.");
});
