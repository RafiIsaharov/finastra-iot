var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://broker.hivemq.com');
client.on('connect', function () {
    console.log("client is connected");
    client.subscribe('device/connected');
});
client.on('message', function (topic, message) {
    if (topic === 'device/connected') {
        console.log("received a message from the publisher, it is: " + message);
    }
});
