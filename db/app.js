const mongoose = require('mongoose');
// mongodb location
mongoose.connect('mongodb://localhost:27017/spot'); 
const db = mongoose.connection;
// 성공 시 log
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	console.log("mongo db connection OK.");
});
