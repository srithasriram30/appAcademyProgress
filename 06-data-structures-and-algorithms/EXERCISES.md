# Big-O Practice

animals = ['alligator', 'bear', 'cat', 'dog', 'elephant', 'fish', 'goose', 'hamster', 'iguana', 'jaguar', 'kangaroo'];

// Count how many animals are in the list
// Time complexity: O(n)
// Space complexity: O(n)
function countAnimals(animals) {
  let count = 0;
  for (let i = 0 ; i < animals.length ; i++) {
    count++;
  }
  return count;
}

// Count how many animals are in the list
// Time complexity: O(1)
// Space complexity: O(n)
function countAnimals2(animals) {
  return animals.length;
}

// Print the first 10 animals in the list
// Time complexity: O(1)
// Space complexity: O(n)
function printTenAnimals(animals) {
  if (animals.length < 10) {
    throw Error("not enough animals")
  }

  console.log(animals[0]);
  console.log(animals[1]);
  console.log(animals[2]);
  console.log(animals[3]);
  console.log(animals[4]);
  console.log(animals[5]);
  console.log(animals[6]);
  console.log(animals[7]);
  console.log(animals[8]);
  console.log(animals[9]);
}

// Print out all the animals
// Time complexity: O(?)
// Space complexity: O(?)
function printAnimals(animals) {
  for (let i = 0 ; i < animals.length ; i++) {
    console.log(animals[i]);
  }
}

// Print out all the animals twice
// Time complexity: O(n)
// Space complexity: O(n)
function printAnimalsTwice(animals) {
  for (let i = 0 ; i < animals.length ; i++) {
    console.log(animals[i]);
  }
  for (let j = 0 ; j < animals.length ; j++) {
    console.log(animals[j]);
  }
}

// Print all possible pairs of animals
// Time complexity: O(n^2)
// Space complexity: O(n)
function printAnimalPairs(animals) {
  for (let i = 0 ; i < animals.length ; i++) {
    for (let j = 0 ; j < animals.length ; j++) {
      console.log(`${animals[i]} - ${animals[j]}`);
    }
  }
}

// Return an array containing all possible pairs of animals
// Time complexity: O(n^2)
// Space complexity: O(n^2)
function getAnimalPairs(animals) {
  const pairs = [];
  for (let i = 0 ; i < animals.length ; i++) {
    for (let j = 0 ; j < animals.length ; j++) {
      pairs.push([animals[i], animals[j]]);
    }
  }
  return pairs;
}


// Return an array containing all possible pairs of animals
// Time complexity: O(n^3)
// Space complexity: O(n^2)
function getAnimalTriples(animals) {
  const triples = [];
  for (let i = 0 ; i < animals.length ; i++) {
    for (let j = 0 ; j < animals.length ; j++) {
      for (let k = 0 ; k < animals.length ; k++) {
        triples.push([animals[i], animals[j], animals[k]]);
      }
    }
  }
  return triples;
}

// Returns the index of the animal if it is in the array
// Returns -1 if it is not in the array
// Time complexity: O(n)
// Space complexity: O(n)
function findAnimal(animals, target) {
  for (let i = 0 ; i < animals.length ; i++) {
    if (animals[i] === target) return i;
  }
  return -1;
}

# Binary Practice

Binary to base 10

    0b1010 //10
    0b0011 //3

Binary to hexadecimal

    0b1010 //A
    0b0011 //3

Hexadecimal to base 10

    0xa1 //161
    0xff // 255

Hexadecimal to binary

    0xa1
    0xff

Base 10 to binary

    8 //0b100
    24 //0b11000
    255 //0b11111111

Base 10 to hexadecimal

    8 //0x08
    24 // 0x18
    255 // 0xff

Base 10 to ASCII

    65 //A
    66 //B
    97 //a
    98 //b

Hexadecimal to ASCII

    0x41 //A
    0x42 //B
    0x61 //a
    0x62 //b

Binary to ASCII

    0b01000001 //A
    0b01000010 //B
    0b01100001 //a
    0b01100010 //b
