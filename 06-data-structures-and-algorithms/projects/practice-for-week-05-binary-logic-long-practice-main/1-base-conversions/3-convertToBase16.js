// Convert the integers in the console.logs below to base 16:

/******************************************************************************/

const convertToBase16 = element => {
  // Your code here
  let hexValBase10 = {10: 'a', 11:'b', 12:'c', 13:'d', 14:'e', 15:'f'};
  let hexValBin = { '0000': '0', '0001': '1', '0010': '2', '0011': '3',
  '0100': '4', '0101': '5', '0110': '6', '0111': '7',
  '1000': '8', '1001': '9', '1010': 'a', '1011': 'b',
  '1100': 'c', '1101': 'd', '1110': 'e', '1111': 'f'};
  let hex = "";
  if(Number.isInteger(element)){
    while(element>0){
      let rem = element%16;
      if(rem<10){
        hex = rem+hex;
      } else {
        hex = hexValBase10[rem] +hex;
      }

      element = Math.floor(element/16);
    }
  } else {
    let binStr = element.substring(2);
    for(let i=0; i<binStr.length;i+=4){
      let binVal = binStr.substring(i, i+4);
      hex+=hexValBin[binVal];
    }

  }

  return "0x"+hex;
};



/******************************************************************************/

console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
console.log(convertToBase16(123)); // 0x7b
console.log(convertToBase16(1000)); // 0x3e8

console.log('––––––');

console.log(convertToBase16('0b1100')); // 0xc
console.log(convertToBase16('0b0101')); // 0x5
console.log(convertToBase16('0b1000')); // 0x8
console.log(convertToBase16('0b0111')); // 0x7

console.log('––––––');

console.log(convertToBase16('0b10100101')); // 0xa5
console.log(convertToBase16('0b11111111')); // 0xff
console.log(convertToBase16('0b01010101')); // 0x55
console.log(convertToBase16('0b00110011')); // 0x33
