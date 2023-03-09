/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
let flatten = array => {
  const flat = [];

  array.forEach(ele => {
    if(Array.isArray(ele)){
      flat.push(...flatten(ele));
    } else {
      flat.push(ele);
    }
  });
  return flat;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
