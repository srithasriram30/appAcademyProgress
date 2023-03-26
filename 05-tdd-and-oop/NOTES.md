# Basic Coding Principles

## Modules and Packages

### Asking Great Questions Pt.2

- 15 min rule
- Great qn:
  - specific
  - clear and consise
  - shows you put work into it
  - can be answered w/ little effort
  - answer unblocks you

### Using NPM
- install latest version: `npm install - g npm@latest`

- To initialise project to use npm: `npm init`
- Install package: `npm install packageName`
- using package in code: eg: `const colors = require('colors');`

- Developemnt dependencies: used to build and test app
- Installing dev dependency: `npm insall packageName --save-dev`
- install existing dependencies: `npm install`
- remove dependency: `npm uninstall packageName`
- update dependency: `npm update packageName`
- update all: `npm update`
- to see more info on vulnerabilities in packages: `npm audit`
- fixing: `npm audit fix`; `npm audit fix --force`
- run scripts: `npm scriptName`

### Common JS Modules

- each JS file is a module
- to export multiple items:
  -  assign to module.exports

     module.exports = { // only add, subtract, and operations gets exported from this file

   add,

     subtract,

     operations

     };

  - set properties on module.exports object

  module.exports.add = add;
  module.exports.subtract = subtract;
  module.exports.operations = operations;
  - exports shortcut

    exports.add = add;

    exports.subtract = subtract;

    exports.operations = operations;
- import objects using require => eg `const students = require('../people/students');
`
- importing multiple items from module:

const calculator = require('./calculator');

const add = calculator.add;

const subtract = calculator.subtract;

const operations = calculator.operations;


### Using modules in Node.js

- modules within a project are known as local modules
- each has a single purpose
- core modules => modules with nodejs
- thrid-party modules => created by developers, companies and organizers; distruibuted and managed through npm
- node app's enterance point => index.js
- export is similar to fn export
- using modlues allows for abstraction

## Clean Maintainable Code

### Reading tests

- tests should be readable => use good descriptive strings

### Refactoring code

- first step: have working code
- then refactoring can be done
### Single Responsibility Principle

- every modules/class/fn should only have one responsibility
- makes code easier to change
- limiting impact by changing code

### DRY

- Don't Repeat Yourself
- No hard and fast rules for this
- Makes code easier to change


# Object Oriented Peogramming

## OOP & Classes

### OOP Basics
- OOP => design pattern that helps devs break large complex projects into simpler pieces
- object: item containing attributes and behaviour

### Encapsulation

- in OOP: Put behaviour and data behind an API that hides implementation details
- definition of object w/ properties and methods: class
- class specifies frameworks of properties and methods
- notjing happens until class has ben instantisated
- object class => def. of object; object instance => use of object

### Creating a Class, Instance Methods and Variables, and Context

- classes defined using `class` keyword, followed by name of class then curly braces
- construtor fn marked with `constructor` keyword
- eg:
  `class Book {
  constructor(title, series, author) {
  this.title = title;
  this.series = series;
  this.author = author;
  }
  }`
- Instantitate class: `const fellowshipOfTheRing = new Book(
  'The Fellowship of the Ring',
  'The Lord of the Rings',
  'J.R.R. Tolkien');`
- def. instace method:
`
  class Book {
  constructor(title, series, author) {
  this.title = title;
  this.series = series;
  this.author = author;
  }

  // Example of an instance method
  getInformation() {
  return `${this.title} by ${this.author}`;
  }
  }

const fellowshipOfTheRing = new Book(
'The Fellowship of the Ring',
'The Lord of the Rings',
'J.R.R. Tolkien');

console.log(fellowshipOfTheRing.getInformation());
`

- use `instanceOf` to check if object is an instance of specific type

### Static methods and Veriable

- static methods => invoked directly on a class
- also reffered as class methods
- can't use this keyword to access an instance
- static vars => not accessible via class instances

### Inheritance
- Implementation inheritance => properties and menthods of parent class are available to objs that inherit from parent class
- Multiple inheritance => obj inheirts from more than one parent class (JS does not support!!!)

### Inheritance Class Syntax

- no explicit parent, class will be child of Object class
- to inherit: `class MyChildClass extends MyClass {} `
- child class also inherits methods
- `super` => used in child class when new constructor in child class, but still use constructor of parent class
- eg: `class Dog extends Animal {
  constructor(name) {
    super(name, 'woof');
  }
}`
-

### Polymorphism

- processing various data types through single interface
- function overloading => ending a different number or type of parameters to a particular function


# Context in JavaScript

## Context in Regular Functions

### Context

- using `this` keyword inside object method, you can refer to values within that object (method style invocation)

### Bind

- Use of `bind` => make a fn that is called with a particular `this` value no matter what

- `let boundFunc = func.bind(context);`

- can be called multiple times

### Call and Apply

- alternative function methods that allows to bind context

- invokes bound fn immediately

- apply takes array of arguments; call spreads them out in comma seperated values

- interchangable

## Context in Arrow Functions

### Context in Arrow Functions

- context of arrow fn is as where it was defined

- arrow fn do not have inherent bindings to a `this` object based on context

- can define class methods as arrow functions
