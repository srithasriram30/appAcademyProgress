// 1.
function sum(array) {

  try{
    let sum = 0;
    if(array !== null){
      for (let i = 0; i < array.length; i++) {
        sum += array[i];
      }
      return sum;
    } else {
      throw new Error("Given value must not be null");
    }

  } catch(error) {
    console.error(`${error.name}: ${error.message}`);
  }

}

let res = sum(null);
console.log(res);

// 2.
// tests
sayName("Alex");
sayName(1);
// Your code here

function sayName(name) {
  try{
    if(typeof name === 'string'){
      console.log(name);
    } else {
      throw TypeError;
    }
  } catch(error){

      console.error("Invaild name! Must be a string!");

  }
}

// 3.
function greet(greeting) {
  try{
    if (!greeting) {
        throw new Error("There was no greeting given.");
      } else {
        console.log(greeting);
      }
  } catch(error){
    console.error(error.message);
  } finally{
    console.log("Hello World!")
  }

}

greet();
