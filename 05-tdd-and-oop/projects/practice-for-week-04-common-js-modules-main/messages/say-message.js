
const hello = require('../messages/hello-message.js');

const helloMessage = hello.hello;
function sayMessage(message) {
  console.log(`"${message}"`)
}

sayMessage(helloMessage);

module.exports = {
  sayMessage
}