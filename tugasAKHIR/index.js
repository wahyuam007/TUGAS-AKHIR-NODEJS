// filename : index.js

//import express
let express = require('express');

// import mongoose
let mongoose = require('mongoose');

// initialize app
let app = express();

// import body parser
let bodyParser = require('body-parser');

//import router
let apiRoutes = require("./route/api-routes");

//configure body-parser
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());

// connect mongoose and set connection varable
mongoose.connect('mongodb://localhost/tugasAKHIR');

var db = mongoose.connection;

// setup server port
var port = process.env.PORT || 8080;

// send message for default URL
app.get('/', (req, res) => res.send('Hello WORLD'));

// app APIRoutes
app.use('/api', apiRoutes)

// Launch app to Listen PORT
app.listen(port, function(){
    console.log("RUnning TugasAKHIR on PORT :" + port)
});