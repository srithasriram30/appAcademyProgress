
// Your code here
const sayHello = require('./send-messages/say-hello-to');
const giveMessage = require('./send-messages/give-message-to-mrs-potato');
const msgs = require('./messages/index');

const sayHelloTo = sayHello.sayHelloTo;
const giveMessageToMrsPotato = giveMessage.giveMessageToMrsPotato;

const msg1 = msgs.message1;
const msg2 = msgs.message2;
const msg3 = msgs.message3;
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);