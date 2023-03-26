
function findBiggerOrSmaller(num1, num2, operation){
  if(operation === 'bigger'){
    return Math.max(num1, num2);
  } else {
    return Math.min(num1, num2);
  }
}
function multiplyBiggerNumByTwo(num1, num2) {
  return findBiggerOrSmaller(num1,num2, 'bigger') *2;
}

function divideBiggerNumByThree(num1, num2) {
  return findBiggerOrSmaller(num1,num2, 'bigger') /3;
}

function eatMostTacos(sum1, sum2) {
  let bigNum = findBiggerOrSmaller(sum1,sum2, 'bigger');
    return `I ate ${bigNum} tacos.`;

}

function adoptSmallerDog(weight1, weight2) {
  let smallDog = findBiggerOrSmaller(weight1, weight2, 'smaller');
    return `I adopted a dog that weighs ${smallDog} pounds.`;

}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};