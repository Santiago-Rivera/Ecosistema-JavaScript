const events = require('events');

const eventEmitter = new events.EventEmitter();

eventEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

eventEmitter.emit('greet', 'Alice');