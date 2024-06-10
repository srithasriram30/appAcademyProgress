function anagrams(str1, str2) {
  // Your code here
  let obj1 = {}, obj2 = {};

  for (let i = 0; i < str1.length; i++){
    if (!obj1[str1[i]]) {
      obj1[str1[i]] = 1;
    } else {
      obj1[str1[i]] += 1;
    }
  }

  for(let i = 0; i < str2.length; i++){
    if (obj2[str2[i]]) {
      obj2[str2[i]] += 1;
    } else {
      obj2[str2[i]] = 1;
    }
  }

  for (let key in obj1) {
    if (obj1[key]!== obj2[key]) {
      return false;
    }
  }

  return true;
}


function commonElements(arr1, arr2) {
  // Your code here
  let combined = arr1.concat(arr2);
  let hashMap = {};
  let commonElements = [];

  for (let i = 0; i < combined.length; i++) {

    if (!hashMap[combined[i]]) {
      hashMap[combined[i]] = 1;
    } else {
      hashMap[combined[i]] += 1;
    }

  }

  for (let key in hashMap) {
    if (hashMap[key] > 1) {
      commonElements.push(parseInt(key));
    }
  }

  return commonElements;
  
}


function duplicate(arr) {
  // Your code here
  let hashMap = {};

  for(let i=0; i<arr.length;i++){
    let ele = arr[i];

    if(!hashMap[ele]){
      hashMap[ele] = 1;
    } else {
      hashMap[ele] += 1;
    }
  }

  for(let key in hashMap) {
    if(hashMap[key] > 1) {
      return parseInt(key);
    }
  }
}


function twoSum(nums, target) {
  // Your code here

  const hashtable = {};

  for(let i=0; i<nums.length;i++) {
    const complement = target - nums[i];if (hashtable.hasOwnProperty(complement.toString())) {
      return true; // Return true if a pair exists
    }
    
    hashtable[nums[i]] = i;
  }
  
  return false;
}


function wordPattern(pattern, strings) {

  // Your code here
  const meanings = {}; 
  const hashtable = {};
  const seen = {};

  for (let i = 0; i < pattern.length; i++) {
    hashtable[pattern[i]] = strings[i];
    seen[strings[i]] = false;
  }

  for (let i = 0; i < pattern.length; i++) {
    const character = pattern[i];
    const string = strings[i];

    if (!meanings[character]) {
      if (seen[string]) {
        return false;
      }
      meanings[character] = string;
      seen[string] = true;
    } else {
      if (meanings[character] !== string) {
        return false;
      }
    }
  }

  return true;
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];