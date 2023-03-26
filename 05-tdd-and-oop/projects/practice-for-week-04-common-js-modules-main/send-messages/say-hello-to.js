const say = require('../messages/say-message.js');

const sayMessage = say.sayMessage;
function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`)
}

sayHelloTo("Woody");

module.exports = {
  sayHelloTo
}