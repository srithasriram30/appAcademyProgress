// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return

  // Divide the array in half

  // Recursively sort the left half
  // Recursively sort the right half

  // Merge the halves together and return
  
  if (arr.length <= 1) {
    return arr
  }

  let half = parseInt(arr.length / 2)

  const array1 = arr.slice(0, half)
  const array2 = arr.slice(half)

  const sortedArray1 = mergeSort(array1)
  const sortedArray2 = mergeSort(array2)

  return merge(sortedArray1, sortedArray2)
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array

  // Point to the first value of each array
  // While there are still values in each array...
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array

  // Return the return array

  const merged = []
  let pointerA = 0
  let pointerB = 0

  while (arrA.length !== 0 || arrB.length !== 0) {
    if (arrA[pointerA] < arrB[pointerB]) {
      merged.push(arrA.splice(pointerA, 1)[0])
    } else if (arrA[pointerA] > arrB[pointerB]) {
      merged.push(arrB.splice(pointerB, 1)[0])
    } else {
      if (arrA.length === 0) {
        return merged.concat(arrB)
      } else {
        return merged.concat(arrA)
      }
    }
  }

  return merged
}

module.exports = [merge, mergeSort];

