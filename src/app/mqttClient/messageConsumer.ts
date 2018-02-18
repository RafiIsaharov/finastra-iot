const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://broker.hivemq.com')

client.on('connect', () => {
    console.log ("client is connected");
    client.subscribe('device/connected');
})

client.on('message', (topic, message) => {
  if(topic === 'device/connected') {
    console.log ("received a message from the publisher, it is: " + message);
  }
})
