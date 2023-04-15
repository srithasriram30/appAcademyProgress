function isFive(num) {
  // Your code here
  return num===5;
}

function isOdd(number) {
  // Your code here

    if(typeof number !== "number"){
      throw new Error("Should be a number");

    } else {
      return number%2===1 || number%2===-1;
    }

}

function myRange(min, max, step = 1) {
  // Your code here
  let array = [];

  for(let i=min; i<(max+1); i+=step){
    array.push(i);
  }
  return array;
}


module.exports = { isFive, isOdd, myRange };
