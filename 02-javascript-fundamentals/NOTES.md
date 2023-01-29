# Intro to Javascript
## Data Types
String interpolation: `hello, {$variable}`


# Intermediate JavaScript

## Problem Solving II

### Intro to Pseudocode

- "fake" version of code
- write a plan for solution w/ logic, but not syntax or methods

## Data Type

### Determining Types
- To determine types, use `typeof variablename` (for number, string and function)

- `Array.isArray` to check if value is an array

### Null and Undefined

`null`

Can mean:
- no value
- unknown value

Null data type

`undefined` => Undefined data type, for unintiziled variables

### Mutability

- ability of something to be changed (immutable => can't be changed, mutable => can be changed)

- Mutable: array, object

- Immutable: number, string, boolean

## Chopping Up Arrays

array methods:

splice: Array.splice(startIndex, elements to remove, "elementAdd1", "elementAdd2"...)

split: String.split(charToSplitAt)

join: Array.join(chatBetweenArrayElements)

## 2D Arrays

- arrays within arrays

 - eg `let twoDimensional = [["a", "b", "c"], ["d", "e"], ["f", "g", "h"]];`

 - to access a => `twoDimensional[0][0]`

  - `twoDimensional[2] = ["f", "g', "h"]`

  ## Advanced Array methods

  ### Array Looping Methods

  - forEach => can go through every element; and even modify them\

  - array.ForEach(function(element, index){
        //methods
  })


- map : so something with every elemnt in array, map expectes a returned value for every elemnt

-filter: for loop, only pulls out certain elemnets

### Reduce

- two parameters: callback, initialValue (optional)

- eg:

const doSum = function (accumulator, currentValue) {
  return accumulator + currentValue;
}


const numbers = [0, 1, 2, 3];
const theSum = numbers.reduce(doSum, 0);
