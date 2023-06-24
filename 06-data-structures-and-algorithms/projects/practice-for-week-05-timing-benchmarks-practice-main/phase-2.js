const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let sumArray = [];

  for(let i = increment; i<11*increment; i += increment){
    let sum = addNums(i);
    sumArray.push(sum);
  }
  return sumArray;

}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let sumArray = [];

  for(let i = increment; i<11*increment; i += increment){
    let sum = addManyNums(i);
    sumArray.push(sum);
  }
  return sumArray;

}

module.exports = [addNums10, addManyNums10];
