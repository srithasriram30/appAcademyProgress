const findMinimum = arr => {

  // Your code here
  let min = arr[0];

  for(let i=0; i<arr.length; i++){
    if(arr[i]<min){
      min = arr[i];
    }
  }

  return min;

};

const runningSum = arr => {

  // Your code here
  if(arr.length === 0){
    return [];
  } else {
      let sum = arr[0];
    let sumArray = [sum];
    for(let i=1; i<arr.length;i++){
      sum += arr[i];
      sumArray.push(sum);

    }
    return sumArray;
  }


};

const evenNumOfChars = arr => {

  // Your code here
  let evenChars = arr.filter(ele => (ele.length %2) === 0);

  return evenChars.length;

};

const smallerThanCurr = arr => {

  // Your code here
  let smallerThan = [];

  for(let i=0; i< arr.length; i++){
    let ele = arr[i];
    let smallerThanCount = 0;
    for(let j=0; j<arr.length;j++){
      let ele2 = arr[j];

      if(ele2<ele){
        smallerThanCount++;
      }

    }
    smallerThan.push(smallerThanCount);

  }
return smallerThan;
};

const twoSum = (arr, target) => {

  // Your code here
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length;j++){
      if((arr[i] + arr[j])=== target){
        return true;
      }
    }

  }
  return false;
};

const secondLargest = arr => {

  // Your code here
  let sorted = arr.sort();

  return sorted[arr.length-2];
};

const shuffle = (arr) => {

  // Your code here
  let randomArr = [];
  while(randomArr.length <arr.length){
    let rand = Math.floor(Math.random() * arr.length);

    let ele = arr[rand];

    if(randomArr.indexOf(ele) === -1){
      randomArr.push(ele);
    }
  }


  return randomArr;


};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
