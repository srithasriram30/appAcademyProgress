/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of parameters
and returns a function.

The returned function will also accept any number of parameters and will
return a string including all of the parameters of smoothieMachine as well
as the returned function's parameters. Look at the examples for a guide of
how your return should be formatted!

See below for examples:

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/



const smoothieMachine = (...ingredients) => {
  // Your code here
  let smoothie = "I'm having a smoothie with ";

  let indgredients1 = [];
  let indgredients2 = [];
  ingredients.forEach(ingredient1 => {
    indgredients1.push(ingredient1);
  });

  smoothie += indgredients1.join(' and ');

  return function makeSmoothie(...moreIngredients) {

    moreIngredients.forEach(ingredient => {
      indgredients2.push(ingredient);
    });

    if(indgredients1.length>0){
      return smoothie + " and " +indgredients2.join(' and ');
    }

    return smoothie + indgredients2.join(' and ');

  }
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  return null;
}
