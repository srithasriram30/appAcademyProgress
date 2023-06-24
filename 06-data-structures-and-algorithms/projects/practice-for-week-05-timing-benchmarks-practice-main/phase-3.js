const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  // Your code here
  let sumArray = [];
  for(let i = increment; i<10*increment; i += increment){
    let startTime = Date.now();
    addNums(i);
 //   sumArray.push(sum);
 let endTime = Date.now();
 console.log(`Runtime: ${endTime - startTime}ms`);
  }
  console.log("---------");
 // return sumArray;

}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code

  // Your code here
  let sumArray = [];
  for(let i = increment; i<11*increment; i += increment){
    let startTime = Date.now();
    addManyNums(i);
  //  sumArray.push(sum);
    let endTime = Date.now();
    console.log(`Runtime: ${endTime - startTime}ms`);
  }
  console.log("---------");
 // return sumArray;

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 10000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(10000);
