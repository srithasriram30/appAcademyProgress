function myMap(inputArray, callback) {

  let output = [];

  for(let i=0; i<inputArray.length;i++){
    let newEl = callback(inputArray[i]);
    output.push(newEl);
  }

  return output;

}

module.exports = {
  myMap
};