const path = require('path');
const express = require('express');
 const publicPath = path.join(__dirname, '../public');
 var app = express();

 app.use(express.static(publicPath));

 
app.listen(8000, function() {
    console.log("The frontend server is running on port 8000!");
});




// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//    res.send('Hello World');
// })

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Example app listening at http://%s:%s", host, port)
// })