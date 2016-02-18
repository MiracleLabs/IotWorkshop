#  Connecting Devices to IBM Bluemix IoT Foundation with Node Red

This document will have all the links, code snippets and notes that you will need to complete our "Connecting Devices to IBM Bluemix IoT Foundation with Node Red"

## Important Links

Access Bluemix - http://bluemix.net

To install Putty - http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html

Access c9 - http://c9.io

Access APIM Portal - https://apim.ibmcloud.com

## Commands

```shell

To download iot-raspberrypi recipe - curl -LO https://github.com/ibm-messaging/iot-raspberrypi/releases/download/1.0.2.1/iot_1.0-2_armhf.deb

To install the iot package - sudo dpkg -i iot_1.0-2_armhf.deb

To verify iot process is running - service iot status

To get Device ID (MAC ID) - service iot getdeviceid

To stop iot Process - sudo service iot stop

To create new device.cfg file - sudo nano /etc/iotsample-raspberrypi/device.cfg

To start iot process - sudo service iot start

To install Strongloop - npm install –g strongloop

To create loopback application - slc loopback 

To install loopback connector for connecting to Cloudant - npm install loopback-connector-cloudant

To create loopback application - slc loopback:model

To run application model - node .


```

## Code Snippets

The following code snippets will help you in creating the final Consumer Application. 

### function node for Twitter Flow in Node Red 

```
msg.temp=msg.payload.d.cputime
msg.name=msg.payload.d.myname
msg.payload={"temp":msg.temp,"name":msg.name}

```

### Safe node in Node Red Flow

```
Temperature({{payload}}) within safe limits
```

### Critical node in Node Red Flow

```
Temperature({{payload}}) Critical
```

### datasources.json

```

{
"db": {
"name": "db",
"connector": "memory"
},
"cloudant": {
"database": "rpi-data",
"username": "fe26cdf0-bd95-485b-aa5e-9862770eb319-bluemix",
"password": "0cbdea29b0c41a6603ccbee9f5901d278e60ddfb25c3923f1f10103f285f11b6",
"name": "cloudant",
"connector": "cloudant"
}
}

```

### function node in Node Red Flow while storing data in Cloudant DB

```
msg.temp=msg.payload.d.cputime
msg.name=msg.payload.d.myname
msg.payload={"temp":msg.temp,"name":msg.name}
msg.loopback_mode_name="rpi-model"

```

### Response Body

```
{
   "fuel": "147",
   "id": "7971a169797d1af8f517808da7fe3653"
}
```
