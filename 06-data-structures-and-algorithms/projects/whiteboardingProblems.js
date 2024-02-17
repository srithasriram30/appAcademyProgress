const logBetween = (start,end) => {
    let arr = []
    for(let i=start; i<end+1;i++){
        arr.push(i);
    }
    return arr;
}
/* 
Time complexity: O(n)
Space Complexity: O(n)
More optimal solution: None

*/

const logBetweenStepper = (start, end, stepper) => {
    let arr = [];
    for(let i=start; i<end+1;i+=stepper){
        arr.push(i)
    }
    return arr;
}

/* 
Time complexity: O(n)
Space Complexity: O(n)
More optimal solution: None

*/

const printReverse = (min, max) => {
    let arr = [];
    for(let i= max-1; i> min; i--){
        arr.push(i)
    }
    return arr;
}

/* 
Time complexity: O(n)
Space Complexity: O(n)
More optimal solution: None

*/

const fizzBuzz = max => {
    let arr = [];

    for(let i=0; i< max+1; i++ ){
        if((1%3 === 0 || i%5) === 0 && !(i%3===0 && i%5==0)){
            arr.push(i);
        }
    }
    return arr;
}

/* 
Time complexity: O(n)
Space Complexity: O(n)
More optimal solution: Possibly use tabulation to derive further values?

*/

let primeMemo = {}
const isPrime = num => {
    if(num === 1){
        return false;
    } else if(num === 2){
        return true;
    }else {
        if(num in primeMemo){
            return primeMemo[num];
        } else {
            for(let i=2; i<= Math.sqrt(num); i++){
                if(num%i===0){
                    primeMemo[num] = false;
                    return false;
                }
            }
        }
        
        primeMemo[num] = true;
        return true;
    }
}

/* 
Time complexity: O(log n)
Space Complexity: O(n)
More optimal solution: ?

*/

const maxValue = array => {
    if(array.length === 0){
        return null
    } else {
        let max = array[0];

    array.forEach(ele => {

        if(ele > max)
            max = ele;

    });
    }
    

    return max;
};

/* 
Time complexity: O(n)
Space Complexity: O(1)
More optimal solution: 

*/

const myIndexOf = (array,target) => {
    for(let i = 0; i<array.length; i++){
        if(array[i] === target)
            return i;
    }

    return -1;
}

/* 
Time complexity: O(n)
Space Complexity: O(1)
More optimal solution: 

*/

const factorArray = (array, number) => {

    let factors = [];

    array.forEach(ele => {
        if(number % ele === 0)
            factors.push(ele);
    });

    return factors;

}

/* 
Time complexity: O(n)
Space Complexity: O(1)
More optimal solution: 

*/

const oddRange = end => {
    let range = [], num =1;

    while(num <=end){
        range.push(num);
        num+=2;
    }

    return range;
}

/* 
Time complexity: O(n)
Space Complexity: O(n)
More optimal solution: 

*/

const reverseHypenString = string => {
    return string.split("-").reverse().join("-");
}

/* 
Time complexity: O(n)
Space Complexity: O(n)
More optimal solution: 

*/

const intersect = (array1, array2) => {
    let intersectArr = [];

    array1.forEach(ele => {
        if(array2.indexOf(ele) !== -1)
            intersectArr.push(ele);
    });

    return intersectArr;
}

/* 
Time complexity: O(n^2)
Space Complexity: O(n)
More optimal solution: 

*/

const mirrorArray = array => {
    for(let i = array.length-1; i>-1; i--){
        array.push(array[i])
    }
    return array;
}

/* 
Time complexity: O(n)
Space Complexity: O(n)
More optimal solution: can't use built-in reverse method; so ?

*/

const abbreviate = sentence => {
    let words = sentence.split(" ");
    for(let i=0; i<words.length;i++){
        let word = words[i];
        if(word.length > 4){
            words[i] = removeVowels(word);
        }
    }
    
    return words.join(" ");
}

/* 
Time complexity: O(n)
Space Complexity: O(n)
More optimal solution: can't use built-in reverse method; so ?

*/

const removeVowels= word => {
    let letters = word.split("");
    let vowels = "aeiou";
    
    for(let i=0; i<letters.length;i++){
        let char = letters[i];
        if(vowels.indexOf(char) != -1){
            letters.splice(i,1);
        }
    }
    
    return letters.join("");
}

/* 
Time complexity: O(n^2) 
Space Complexity: O(n)
More optimal solution: ?

*/

const adults = people => {

    let adultArr = [];

    people.forEach(person =>{

        if(person.age > 17){
            adultArr.push(person.name);
        }

    });

    return adultArr;

}

/* 
Time complexity: O(n)
Space Complexity: O(n)
More optimal solution: filter method(?)

*/

const countScores = people => {
    let scores = {};

    people.forEach(person => {
        let name = person.name;
        if(scores.hasOwnProperty(name)){
            scores[name] += person.score
        } else {
            scores[name] = person.score
            console.log(scores)
        }
    });

    return scores;
}

/* 
Time complexity: O(n)
Space Complexity: O(n)
More optimal solution: 

*/

const firstNPrimes = n => {
    let primes = [];
    let i = 2;

    while(primes.length < n) {
        if(isPrime(i)){
            primes.push(i)
        }

        i++;
    }
    return primes;
}



/* 
Time complexity: O(n^2); may be O(n) if all primes are present in primeMemo
Space Complexity: 
More optimal solution: 

*/

const peakFinder = array => {
    let peaks = [];

    if(array[0] > array[1]){
        peaks.push(0);
    }

    if(array.length-1 > array.length-2){
        peaks.push(array.length-1);
    }

    for(let i = 0; i < array.length-1;i++) {
        if((array[i] > array[i-1]) && (array[i] < array[i+1])) {
            peaks.push(i);
        }
    }


    return peaks;
}

/* 
Time complexity: O(n)
Space Complexity: O(1)
More optimal solution: 

*/

const divisibleByThreePairSum = array => {
    let paris = []

    for(let i=0; i<array.length; i++) {
        for(let j= i+1; j<array.length; j++) {
            let sum = array[i] + array[j];
            if(sum % 3 === 0)
            
                paris.push([i,j]);
        }
            
    }

    return paris;

}

/* 
Time complexity: O(n^2)
Space Complexity: O(1)
More optimal solution: 

*/

const zipArray = (array1, array2) => {
    let zipped = [];

    for(let i=0; i< array1.length;i++){
        zipped.push([array1[i], array2[i]]);
    }

    return zipped;
}

/* 
Time complexity: O(n)
Space Complexity: O(n)
More optimal solution: 

*/

const twoDimensionalTotal = array => {
    let flatten = array.flat();
    const initial = 0;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return flatten.reduce(reducer, initial);

}

/* 
Time complexity: O(n)
Space Complexity: O(1)
More optimal solution: 

*/

const countInnerElement = array => {
    let elements = {}

    array.forEach(inner => {
        inner.forEach(ele => {
            if(elements.hasOwnProperty(ele)){
                elements[ele] += 1
            } else {
                elements[ele] = 1;
            }
        });

    });

    return elements;
}


/* 
Time complexity: O(n^2)
Space Complexity: O(n)
More optimal solution: 

*/

const twoDiff = array => {
    let paris = []

    for(let i=0; i<array.length; i++) {
        for(let j= i+1; j<array.length; j++) {
            let diff = Math.abs(array[i] - array[j]);
            if(diff === 2)
            
                paris.push([i,j]);
        }
            
    }

    return paris;

}

/* 
Time complexity: O(n^2)
Space Complexity: O(n)
More optimal solution: 

*/

const arrayDiff = (array1,array2) => {

    let diff = [];

    array1.forEach(ele => {

        if(array2.indexOf(ele) === -1){
            diff.push(ele)
        }

    });


    return diff;

}

/* 
Time complexity: O(n^2)
Space Complexity: O(n)
More optimal solution: 

*/

const valueCounter = (obj, val) => {
    let count = 0;

    let values = Object.values(obj);

    values.forEach(value => {
        if(value === val){
            count++;
        }
    })

    return count;
}

/* 
Time complexity: O(n)
Space Complexity: O(1)
More optimal solution: 

*/

const elementCount = array => {
    let count = {};

    array.forEach(ele => {
        if(count.hasOwnProperty(ele)){
            count[ele] += 1
        } else {
            count[ele] = 1;
        }
    });

    return count;
}

/* 
Time complexity: O(n)
Space Complexity: O(n)
More optimal solution: 

*/

const nextTwoPrimes = num => {
    let primes = [];

    num++;
    

    while(primes.length <2){
        if(isPrime(num)){
            primes.push(num);
        }

        num++;
    }

    return primes;
}

/* 
Time complexity: O(n sqrt(n) )
Space Complexity: O(n)
More optimal solution: 

*/

const pairProduct = (arr,num) => {
    let pairs = [];
    let i = 0;

    while(i<arr.length){
        let j = i+1;
        while(j<arr.length){
            if(arr[i]*arr[j] === num){
                pairs.push([i,j]);
            }
        }
    }

    return pairs;
}

/* 
Time complexity: O(n^2)
Space Complexity: O(n)
More optimal solution: 

*/

const twoDimensionalSize = arr => {
    let flattened = arr.flat();

    return flattened.length;
}

/* 
Time complexity: O(n)
Space Complexity: O(1)
More optimal solution: 

*/

const longWordCount = string => {
    let count = 0;

    let arr = string.split(" ");

    arr.forEach(ele => {
        if(ele.length > 7)
            count++;
    });

    return count;
}

/* 
Time complexity: O(n)
Space Complexity: O(1)
More optimal solution: 

*/
let factorialMemo = {}

const factorial = num => {
    if (num in factorialMemo) return factorialMemo[num];
    if (num === 1) return 1;
    factorialMemo[num] = n * factorial(n - 1);
    return factorialMemo[num]
}

/* 
Time complexity: O(n) if first time calling, O(1) others
Space Complexity: O(n)
More optimal solution: 

*/

const lcm = (num1,num2) => {
    let bigger = num1 > num2 ? num1 : num2;

    let max = num1*num2;
    while(bigger <=max) {
        if(bigger%num1 === 0 && bigger%num2 === 0)
            return bigger

            bigger += bigger;
    }
    
}

/* 
Time complexity: O(n)
Space Complexity: O(1)
More optimal solution: 

*/

const hipsterfyWord = word => {

    let vowels = "aeiou";
    
    for(let i=word.length-1; i>-1;i--){
        let char = word[i];
        if(vowels.includes(char)){
            return word.slice(0,i)+word.slice(i+1);
        }
    }
    
    return word;

}

/* 
Time complexity: O(n)
Space Complexity: O(1)
More optimal solution: 

*/


const hipsterfy = sentence => {

    let words = sentence.split(" ");
    
    for(let i=0; i<words.length;i++){
        words[i] = hipsterfyWord(words[i]);
    }
    
    return words.join(" ");

}

/* 
Time complexity: O(n^2)
Space Complexity: O(n)
More optimal solution: 

*/


const objectToString = count => {
    let string = "";

    for(const [key,value] of Object.entries(count)){
        string += key.repeat(value)
    }

    return string;
}

/* 
Time complexity: O(n)
Space Complexity: O(n)
More optimal solution: 

*/


const shortestWord = sentence => {
    let words = sentence.split(" ");

    let shortest = words[0];

    words.forEach(word => {
        if(word.length < shortest){
            shortest = word;
        }
    });

    return shortest;
}

/* 
Time complexity: O(n)
Space Complexity: O(1)
More optimal solution: 

*/


const greatestCommonFactor = (num1, num2) => {
    let smaller = num1 < num2 ? num1 : num2;

    while(smaller > 0){
        if(num1%smaller === 0 && num2%smaller === 0){
            return smaller;
        }
        smaller--;
    }
}

/* 
Time complexity: O(min(num1, num2))
Space Complexity: O(1)
More optimal solution: 

*/


const isPassing = assessments => {
    let sum = 0;

   assessments.forEach(assessment => {
    sum += assessment.score;
   });

   return sum/assessments.length > 70;
}

/* 
Time complexity: O(n)
Space Complexity: O(1)
More optimal solution: 

*/


const valueConcat = (array, obj) => {
    let concats = [];

    array.forEach(ele => {
        let val = ele.concat(obj[ele]);
        concats.push(val);
    });


    return concats;
}

/* 
Time complexity: O(n)
Space Complexity: O(n)
More optimal solution: 

*/


const threeInARow = arr => {

    for(let i=0; i<arr.length -2; i++){
        if((arr[i] === arr[i+1]) && (arr[i+1] === arr[i+2]))
            return true;
    }

    return false;

}

/* 
Time complexity: O(n)
Space Complexity: O(1)
More optimal solution: 

*/


const variableNameify = words => {
    let name = words[0].toLowerCase();

    for(let i=1; i< words.length;i++){
        let word = words[i];

        name += word[0].toUpperCase() + word.slice(1).toLowerCase();
    }

    return name;
}

/* 
Time complexity: O(n)
Space Complexity: O(1)
More optimal solution: 

*/


const threeIncreasing = arr => {
    for(let i=0; i<arr.length -2; i++){
        if((arr[i] === arr[i+1] -1) && (arr[i+1] === arr[i+2] -1))
            return true;
    }

    return false;
}

/* 
Time complexity: O(n)
Space Complexity: O(1)
More optimal solution: 

*/


const reverse2D = array => {
    let reversed = "";

    for(let i = array.length -1; i> -1; i--){
        reversed += array[i].reverse().join('');
    }

    return reversed
}

/* 
Time complexity: O(n^2)
Space Complexity: O(1)
More optimal solution: 

*/


const lastVowel = (word) => {
    let vowels = "aeiou";
    
    for(let i=word.length-1; i>-1;i--){
        let char = word[i];
        if(vowels.indexOf(char.toLowerCase()) !== -1){
            return i;
        }
    }
    
    return -1;
}

const reverb = word => {
    let index = lastVowel(word);
    
    if(index === -1){
        return word;
    } else {
        return `${word}${word.slice(index)}`
    }
}

/* 
Time complexity: O(n)
Space Complexity: O(1)
More optimal solution: 

*/


const countRepeats = string => {
    let count = 0;
    let unique = {}

    for(let i = 0; i<string.length; i++){
        let char = string[i]

        if(unique.hasOwnProperty(char)){
            unique[char] += 1;
            if(unique[char] === 2){
                count++;
            }
        } else {
            unique[char] = 1;
        }

    }


    return count;
}

/* 
Time complexity: O(n)
Space Complexity: O(n)
More optimal solution: 

*/


const pairsToString = arr => {

    let string = "";

    arr.forEach(ele => {
        string += ele[0].repeat(ele[1])
    })


    return string;

}

/* 
Time complexity: O(n)
Space Complexity: O(1)
More optimal solution: 

*/


const countAdjacentSums = (arr, n) => {

    let count = 0;

    for(let i = 0; i < arr.length-1; i){
        if(arr[i]+ arr[i+1] === n) {
            count++;
        }
    }


    return count;

}

/* 
Time complexity: O(n)
Space Complexity: O(1)
More optimal solution: 

*/


const signFlipCount = nums => {
    let count = 0;

    for(let i = 0; i < nums.length; i){
        let check1 = Math.sign(nums[i]) === 1 && Math.sign(nums[i+1]) === -1;
        let check2 = Math.sign(nums[i]) === -1 && Math.sign(nums[i+1]) === 1;

        if(check1 || check2){
            count++;
        }
    }

    return count;
}

/* 
Time complexity: O(n)
Space Complexity: O(1)
More optimal solution: 

*/


const powerSequence = (base, length) => {
    let powers = [], i = 1;

    while(i<length+1){
        powers.push(Math.pow(base,i));
        i++;
    }


    return powers;
}

/* 
Time complexity: O(n)
Space Complexity: O(n)
More optimal solution: 

*/


const collapseString = str => {
    for(let i = 0; i < str.length;i++) {

        if(str[i] === str[i+1]){
            str = str.slice(0,i) + str.slice(i+1);
        }}
        return str;
}


/* 
Time complexity: O(n^2)
Space Complexity: O(1)
More optimal solution: 

*/


const oddWordsOut = sentence => {

    let words = sentence.split(" ");

    for(let i = 0; i < words.length;i++){
        if(words[i].length%2 === 0){
            words.splice(i,1);
        }
    }

    return words.join(" ");

}

/* 
Time complexity: O(n^2)
Space Complexity: O(1)
More optimal solution: 

*/


const mindPsAndQs = str => {
    let currentStreak =0, maxStreak =0;
    for(let i = 0; i < str.length;i++){
        let char1 = str[i];
        let char2 = str[i+1];

        if((char1==='P' || char1==='Q') && (char2==='P' || char2==='Q')){
            currentStreak++;
            if(currentStreak > maxStreak){
                maxStreak = currentStreak;
            }
    
        }
    }

    return maxStreak;

}

/* 
Time complexity: O(n)
Space Complexity: O(1)
More optimal solution: 

*/


const commonFactors = (num1, num2) => {

    let factors = [], i = 1;

    let bigger = num1 > num2 ? num1 : num2;

    while(i<=bigger){
        if(num1%i === 0 && num2%i === 0){
            factors.push(i);
        }
        i++;
    }

    return factors;

}

/* 
Time complexity: O(n)
Space Complexity: O(1)
More optimal solution: 

*/


const commonPrimeFactors = (num1, num2) => {
    let factors = [], i = 1;

    let bigger = num1 > num2 ? num1 : num2;

    while(i<=bigger){
        if((num1%i === 0 && num2%i === 0) && isPrime(i)){
            factors.push(i);
        }
        i++;
    }

    return factors;
}

/* 
Time complexity: O(n^2)
Space Complexity: O(n)
More optimal solution: 

*/


const splitHalfArray = array => {
    let splitArray = []

    let isEvenLength = (array.length %2 === 0) ? true : false;

    let midPoint = Math.floor(array.length / 2);

    let firstHalf = array.slice(0, midPoint);
    splitArray.push(firstHalf);
    if(isEvenLength) {
        let secondHalf = array.slice(midPoint);
        splitArray.push(secondHalf);
    } else {
        let secondHalf = array.slice(midPoint+1);
        splitArray.push(secondHalf);
    }

    return splitArray;

}

/* 
Time complexity: O(n)
Space Complexity: O(n)
More optimal solution: 

*/


const threeUniqueVowels = string => {

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    vowels.forEach(vowel => {
        if(string.indexOf(vowel) !== -1){
            count++;
        }
    })

    return count > 2;

}

/* 
Time complexity: O(n)
Space Complexity: O(1)
More optimal solution: 

*/


const vowelShift = sentence => {

    let sentenceArr = sentence.split('')
  
      const vowels = ['a', 'e', 'i', 'o', 'u'];
  
      for(let i = 0; i < sentence.length; i++) {
          let char = sentence[i];
          let vowelIndex = vowels.indexOf(char);
          console.log(vowelIndex)
          if(vowelIndex!== -1){
              if(vowelIndex === 4){
                  sentenceArr[i] = vowels[0];
              } else {
                  sentenceArr[i] = vowels[vowelIndex + 1];
              }
          }
      }
  
      return sentenceArr.join('');
  
  }

/* 
Time complexity: O(n)
Space Complexity: O(n)
More optimal solution: 

*/


const hasSymmetry = array => {

}

/* 
Time complexity: 
Space Complexity: 
More optimal solution: 

*/

let sumMemo = {}

const evenSums = num => {
    let sum = 0, i= 2;

    while(i<num) {
        sum += i;
        num += 2;
    }

    return sum;
}

const evenSumArray = array => {
    let sumArray = [];
    array.forEach(ele => {
        if(ele in sumMemo){
            sumArray.push(sumMemo[ele]);
        } else {
            let sum = evenSums(ele);
            sumMemo[ele] = sum;
            sumArray.push(sum);
        }
    });

    return sumArray;

}

/* 
Time complexity: O(n^2), but maybe smaller if nums are in memo
Space Complexity: O(n)
More optimal solution: 

*/


const numsToWords = numString => {
 const numWords = {"1": "one", "2": "two", "3": "three", 
 "4": "four", "5": "five", "6": "six", "7": "seven", 
 "8": "eight", "9": "nine"}

 let words = "";

 for(let i = 0; i < numString.length; i++) {
    let char = numString[i];
    words += numWords[char];
 }

 return words;

}

/* 
Time complexity: O(n)
Space Complexity: O(1)
More optimal solution: 

*/


const moreDotLessDash = str => {

    let dotCount = 0, dashCount = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] === '.'){
            dotCount += 1;
        }
        if(str[i] === '-'){
            dashCount += 1;
        }
    }

    return dotCount > dashCount;

}

/* 
Time complexity: O(n)
Space Complexity: O(1)
More optimal solution: 

*/
