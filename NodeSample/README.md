# Demo Application : Simulating Device Events to the Watson IoTF with the Node.js IoTF Module

In this demo the web application will publish device events(Temperature) through a form field and will simulate a connected device such as a temperature sensor. We have created a Node.js API which publishes registered events to the Watson IoT Platform using MQTT and the Watson IoTF Node Module.

## Technology Overview

The following are the technologies that are used in this demo. Any prior knowledge of these technologies will accelerate your pace of learning and using the demo.

• IBM Bluemix and Watson IoT Foundation

• Internet of Things and MQTT

• Node.js and NPM

• Express.js(For Routing and Middleware)

• HTML/CSS/JavaScript

## Install Prerequisites

The following installations need to be enabled to run this demo on your machine. Use the links below to navigate and recreate the demo.

Install Git to your command line - <https://git-scm.com/>

Install Node.js and NPM - <https://nodejs.org/en/>

## Clone and Demo!

Clone the repository to your laptop and start using the code to run your demo by following the below simple steps.

To clone the repository use the following command (or) use the GUI to download the files.

```shell
git clone
```

Sign In to your Bluemix Account and create a new "Internet of Things Foundation" service which will give you the IoT Dashboard. Click on the service and then on Launch Dashboard to open up your device dashboard.

Go ahead and add a device and make sure that you have information similar to the format before so that you can configure your demo application.

```javascript
{
    "org": "s9jrde",
    "id": "1234",
    "type": "MyCar",
    "auth-method": "token",
    "auth-token": "FO+xm5RtxguC-ILx@+"
}
```

Once you have cloned the repository and created your device in the Watson IoT foundation, navigate into the repository folder and run the following commands.

To install all the required dependencies from the package.json file,(You might have to use sudo before the command based on the permissions that your user has)

```shell
npm install
```

Once you have the information for your device configuration as stated above, replace the device configuration that is there in the app.js file at line 29 where it says "var config = {..}".

```javascript
var config = {<Add Device Configuration from above here>};
```

To then run the web server which serves the web pages and the API, execute the following command,

```shell
node app.js
```

You should see a comment on your console saying "Your IoT Server is running at..". In that use the address given, which is localhost:4000 and open it in a browser.

## Demo Contributors

The following people have contributed to the development and delivery of this demo. This Lab is created and owned by the Miracle Innovation Labs Team.

• Aditya Chinni - Lead/Miracle Innovation Labs

• Chanakya Lokam - Director - Miracle Innovation Labs
