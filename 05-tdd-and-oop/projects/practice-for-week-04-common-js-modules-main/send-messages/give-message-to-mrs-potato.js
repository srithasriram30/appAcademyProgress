const sayHello = require("./say-hello-to");
const sayHelloTo = sayHello.sayHelloTo;

function giveMessageToMrsPotato(message) {
  sayHelloTo("Mrs. Potato");
  console.log(`(Psst... ${message})`)
}

giveMessageToMrsPotato("Hi Buzz");

module.exports = {
  giveMessageToMrsPotato
}