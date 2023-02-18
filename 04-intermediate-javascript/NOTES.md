# Lcoal JavaScript

## Pair Programming

common concepts in pair programming:
-one shared device
-evryone has a job
-everyone gets a turn
-no one is "too good to pair"

Roles

- Driver => ownership of keyboard, does typing and asking qns. Focus on current task

- Navigator => in charge of what's being typed, maintaining momentum. Lead discussions and direct driver what to type


Pair programming -> 15% less coding time (compared to expected 50%); 15% less errors

# Objects

## JavaScript Objects

### Object type

- data stored in key-value pairs

- declared using {} eg, `let car = {}`

- setting variables: `let car[color] = "Blue"`, `lat car[seats] = 2`

- key w.o value => gives undefined

- key not in obj => undefined
    `car[weight] === undefined ` => gives boolean;

    modern way: `"model" in car` => gives boolean;

- variables can be used as keys

- can also use dot notation to access keys, `car.color`

-Dot notation:

    easier to read
    easier to write because we don't have to deal with using quotation marks
    cannot use variables as keys
    keys can't contain numbers as their first character (object.1key doesn't work!)

-Bracket notation:

    you can use variables (assigned to string values) as keys!
    It is okay to use variables and Strings that start with numbers as keys (use object['1key'] does work, while object.1key does not)

### Iterating through objects

- for loop: `for(let variable in object)`

- method: function that belongs to an object, call using: `methodName.funcName`

- `Object.keys` => returns array of keys

- `Object.values` => returns array of values

- `Object.entries` => both keys and values in 2D array

### References vs Primitives

- Primitives: boolean, null, undefined, number, string

- Reference type: object

- Primitive types are immutable (cannot be changed)

### Rest and Spread

- rest parameter => capture all of args into an array

- eg:

function adder(num1, ...otherNums) {
  console.log("The first number is: " + num1);
  let sum = num1;

  // captures all other arguments into an array and adds them to our sum
  otherNums.forEach(function(num) {
    sum += num;
  });

  console.log("The sum is: " + sum);
}

- spread operator => break data down into elements that make it up

eg:

let colors = { red: "scarlet", blue: "aquamarine" };
let colors2 = { green: "forest", yellow: "sunflower" };

let moreColors = { ...colors, ...colors2 };

moreColors
// {red: "scarlet", blue: "aquamarine", green: "forest", yellow: "sunflower"}


function speak(verb, noun) {
  return "I like to go " + verb + " with " + noun + ".";
}

const words = ["running", "Jet"];

console.log(speak("running", "Jet")); // => I like to go running with Jet.
console.log(speak(...words)); // => I like to go running with Jet.

### Destructuring

- destructuring assignment => extract parts of an array or object into distinct variables

- eg:

let numArray = [10, 20];

// here we are "unpacking" the array values into two separate variables
let [firstEl, secondEl] = numArray;

console.log(firstEl); //=> 10
console.log(secondEl); //=> 20

## Callbacks and Functions

### Callbacks

- fn that is passed as parameter

- can call fn directly, known as anonymous callback

- eg

let foobar = function(callback) {
  console.log("foo");
  callback();
  console.log("bar");
};

foobar(function() {
  console.log("hello");
});

### Functions as first class objects

- three ciretria for 1st obj in JS => can be stored in variable, can be passed as parameter, can be returned

- funcations meet all three, so are first class obj

## Scope and Closures

### Scope

- scope => variables that are available for use

- Advantages of utilizing scope:
  -security: vars can only be accessed by pre-defined parts of programs

  - Reduced Variable Name Collisions: can use same var name in multiple parts of same program

- three types: global, local and block

Global Scope
  - available through entire program
  -best avoided

Local scope
  - scope within fn
  - includes args, vars defined in fn and any vars already declared when fn was defined

Block scope
  - Block => code within curly braces (eg, in if, for loop)

Scope chaining: inner scope does not have access to vars in outer scope

### Variables

- let vs var vs const

- let: variable can be reassigned
- const: variable cannot be reassinged, will be same
- var: may or may not be reassigned, scoped to a function

- hoisting: vars and fn declarations moved to top of scope

### Arrow functions

- more consie way of declaring functions

- eg of arrow fn:
    let averageArrow = (num1, num2) => {
      let avg = (num1 + num2) / 2;
      return avg;
    };

- Anatomy:

(parameters, go, here) => {
  statement1;
  statement2;
  return a value;
}

- if only one parameter, the `()` may be omited

- no parameters, `()` are required

- single expression: `argument => expression;`

- eg: `const arrowMultiply = (num1, num2) => num1 * num2;`

- are annonymous, need to be assigned to be named


### Closures

- closure is when an inner fn uses or changes variables in an outer fn

- have access to own as well as out fn's scope when declared

- keep reference to all vars even if outer fn has returned

- use to define private state for vars

- eg

  function createCounter() {
    let count = 0;

    return function() {
      count++;
      return count;
    };
  }

  let counter = createCounter();
  console.log(counter()); // => 1
  console.log(counter()); // => 2

  //we cannot reach the count variable!
  counter.count; // undefined
  let counter2 = createCounter();
  console.log(counter2()); // => 1

  - can also pass arguments inplicitly
