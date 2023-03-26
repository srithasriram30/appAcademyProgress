// Your code here
const {Employee} = require('./employee');

let john = new Employee('John Wick', 'Dog Lover');


const sayingHello = john.sayName.bind(john);

const sayingOccupation = john.sayOccupation.bind(john);

setTimeout(sayingHello, 2000);
setTimeout(sayingOccupation,3000);
