var express = require('express');
var mongoose = require('mongoose');
var app = express();
var PORT = 3002;
// var MONGO_TCP_URL = process.env.MONGO_PORT;
// var MONGO_DB_URL = MONGO_TCP_URL.replace('tcp','mongodb');

// console.log(MONGO_DB_URL)

//Connect to our Mongoose database with host:'localhost' and 'port':'27017'
//var db = mongoose.createConnection(MONGO_DB_URL);
//Get an instance of 'test' collection to query
//var test_collection = db.collection('test');

// respond with "hello world" when a GET request is made to the homepage
app.get('/hello', function(req, res) {
  res.send('hello world');
});

app.get('/', function(req, res) {
	res.send('Are you connecting')
	//Lets find our name that we put it MongoDB and return it to the requester
	//of our home page
	// test_collection.find({'_id':'name'}, function(err, cursor){

	// 	//Cursor that iterates over results turns those results into an array
	// 	cursor.toArray(function(err, data){
	// 		res.send(data || err);
	// 	})
	// })
  
});

//Make sure our app is now listening for requests on 'PORT' variable
app.listen(PORT, function(){
	console.log('Server listening on port ', PORT);
});
