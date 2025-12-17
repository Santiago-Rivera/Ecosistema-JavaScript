setInterval(() => {
  console.log('This message is logged every 2 seconds');
}, 2000);

setTimeout(() => {
  console.log('This message is logged after 10 seconds');
}, 10000);

console.log('This message is logged immediately');