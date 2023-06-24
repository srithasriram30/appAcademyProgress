function returnsThree() {
  // Your code here
return 3;
}

function reciprocal(n) {
  // Your code here
  if(n>0 && n<1000000){
    return 1/n;
  } else {
    throw new Error("Number should be between 1 and 1000000");
  }

}

module.exports = {
  returnsThree,
  reciprocal
};
