const addZeros = require('../utils/addZeros');

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/

const asciiTo8bit = str => {
  // Your code here
  let binStr = "";
  for(let i= 0; i<str.length;i++){
    let element = str[i].charCodeAt(0);
    let base2 = "";
    while(element>0){
      let val = element%2;
      base2= val+base2;
      element = Math.floor(element/2);
    }
    binStr +=addZeros(base2,8);
  }
  return binStr;
};

/******************************************************************************/

console.log(asciiTo8bit('123'));
// 00110001 00110010 00110011

console.log(asciiTo8bit('ABC'));
// 010000010100001001000011

console.log(asciiTo8bit('Hello, world!'));
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001
