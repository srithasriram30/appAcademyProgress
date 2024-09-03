function ageSort(users) {
  // Your code here
  return users.sort((a,b) => a.age - b.age);
}

function oddEvenSort(arr) {
  // Your code here

  arr.sort((a, b) => {
    return (b % 2 === a % 2) ? a - b : b % 2 - a % 2;
  });
  return arr;


}

function validAnagrams(s, t) {
  // Your code here
  let sSort = s.split('').sort().join('');
  let tSort = t.split('').sort().join('');

  return sSort === tSort;

  
}

function reverseBaseSort(arr) {
  // Your code here

  return  arr.sort((a, b) => {
    if (a.toString().length > b.toString().length) return -1;
    if (a.toString().length < b.toString().length) return 1;
    return a - b;
  });
}

function frequencySort(arr) {
  // Your code here
  let freq = (target => arr.filter(val => val === target).length);
  arr.sort((a, b) =>{
    let aFreq = freq(a);
    let bFreq = freq(b);
    if (aFreq !== bFreq){
      return aFreq - bFreq;
    }else{
      return b - a;
    }
  })
  return arr;
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];