function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let oddArr = [];
    for(let i=1;i<arr.length;i+=2){
        oddArr.push(arr[i]);
    }

    return oddArr;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let oddArr = [];
    let max;
    if(arr.length%2==0){
        max= arr.length -1;
    } else {
        max= arr.length-2;
    }
    for(let i=max;i>0;i-=2){
        oddArr.push(arr[i]);
    }

    return oddArr;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here

    let arr1 = [];

    for(let i=1; i<arr.length;i*=2){
        arr1.push(arr[i]);
    }

    return arr1;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let arr1 = [];

    for(let i=1; i<arr.length;i*=n){
        arr1.push(arr[i]);
    }

    return arr1;

}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let arr1 = [];
    let max = Math.ceil(arr.length/2);

    for(let i=0; i<max;i++){
        arr1.push(arr[i]);
    }

    return arr1;

}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let arr1 = [];
    let min = Math.ceil(arr.length/2);

    for(let i=min; i<arr.length;i++){
        arr1.push(arr[i]);
    }

    return arr1;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
