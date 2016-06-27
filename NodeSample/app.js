//Required Modules for the application
var express = require("express");
var Client = require("ibmiotf");
var parser = require('body-parser');
var path = require('path');

//Initiallization for the above Modules
var app = express();

//parse application/json
app.use(parser.json());

//parse application/x-www-form-urlencoded
app.use(parser.urlencoded({
    extended: true
}));

//For serving static Images and HTML/JS/CSS Files
app.use(express.static(__dirname + '/'));

//Serve the HTML Form at the '/' path
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './', 'index.html'));
})

//API Endpoint at '/temp' which
app.post('/temp', function(req, res) {

    var config = {
        "org": "s9jrde",
        "id": "1234",
        "type": "MyCar",
        "auth-method": "token",
        "auth-token": "FO+xm5RtxguC-ILx@+"
    };

    var deviceClient = new Client.IotfDevice(config);

    deviceClient.log.setLevel('debug');

    //Connects to the IBM IoT Cloud
    deviceClient.connect();

    //Define the callback on connection success
    deviceClient.on("connect", function() {
        //Publish the events from the web page
        deviceClient.publish("temperature", "json", "{'temp':'" + req.body.temp + "'}");
        console.log("Event has been published!");
        res.send("Event Published!");
        //Disconnect the Client once the event has been published
        deviceClient.disconnect();
    });

    //Error Handling for IBM IoTF Connection
    deviceClient.on("error", function(err) {
        console.log("Connection Error : " + err);
        res.send("Event Publish Error!");
        //Disconnect the Client once an error has happened
        deviceClient.disconnect();
    });

});

//Start the server on port 4000
var server = app.listen(4000, function() {
    console.log("The IoT Foundation Sample Server is running at localhost:4000");
});
