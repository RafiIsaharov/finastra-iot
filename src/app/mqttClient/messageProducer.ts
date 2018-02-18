const mqttProducer = require('mqtt');
const producer = mqttProducer.connect('mqtt://broker.hivemq.com')

console.log('publisher start')

producer.on('connect', () => {
    producer.publish('device/connected','i am connected');
    console.log('publisher connected to topic')
})

    console.log ("Start sending messages to the topic")

  for (var i=0;i<10;i++) {
  producer.publish('device/connected','this is a message!')
  console.log('published a message to the topic, device is connected')
  }


  
