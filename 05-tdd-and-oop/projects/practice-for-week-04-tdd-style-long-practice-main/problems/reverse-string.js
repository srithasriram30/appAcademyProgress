function reverseString(string) {

  if(typeof string !== "string"){
    throw TypeError("Input should be a string")
  }
  // Your code here
  return string.split("").reverse().join("");
};

module.exports = { reverseString };