#  Miracle's Completely Hands-On IoT Workshop(Part of the Bring IoT Home Series)

This document will have all the links, code snippets and notes that you will need to complete our "Miracle's Completely Hands-On IoT Workshop"

## Important Links

Access Bluemix - http://bluemix.net

To install Putty - http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html

Access c9 - http://c9.io

Access APIM Portal - https://apim.ibmcloud.com

## Commands

To download the IBM IoTF Recipe from Github

```shell
curl -LO https://github.com/ibm-messaging/iot-raspberrypi/releases/download/1.0.2.1/iot_1.0-2_armhf.deb
```

To install the IoTF Recipe on your Raspberry Pi

```shell
sudo dpkg -i iot_1.0-2_armhf.deb
```

To verify that the IoTF process is running

```shell
service iot status
```

To get the Device Information from the IoTF Config

```shell
service iot getdeviceid
```

To stop the IoT Process

```shell
sudo service iot stop
```
To start the IoT Process

```shell
sudo service iot start
```

The following are the Strongloop commands, 

```shell
npm install -g strongloop

slc loopback

slc loopback-model

npm install loopback-connector-cloudant

node .
```

## Device.cfg File for Raspoberry Pi Registration

The following commands needs to be used to create the device.cfg file for the Raspberry Pi to be registered with the IBM Watson Internet of Things Foundation. 

```shell
sudo nano /etc/iotsample-raspberrypi/device.cfg
```

The following should be the contents of the file, 

```javascript
var org = “<your-Organization-ID>”
var type = “<your-device-Type>” 
var id = “<your-device-ID>”
var auth-token = “<your-device-Token>”
var auth-method = "token"
```

## Code Snippets

### Function Node in Node Red for Final Flow 

```javascript
msg.temp = msg.payload.d.cputime
msg.name = msg.payload.d.myname
msg.payload = {"temp":msg.temp,"name":msg.name,"loopback__model__name":"<Your Loopback Model Name>"}
```

### datasources.json

```javascript
{
   "db": {
      "name": "db",
      "connector": "memory"
   },
   "cloudant": {
      "database": "<Your DB Name>",
      "username": "Credentials from Bluemix",
      "password": "<Credentials from Bluemix>",
      "name": "cloudant",
      "connector": "cloudant"
   }
}
```

### API Response Format(JSON)

```
{
   "fuel": "147",
   "id": "7971a169797d1af8f517808da7fe3653"
}
```
