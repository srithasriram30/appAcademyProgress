// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:
  */
   let  arrCopy = arr.slice();
  let sortedArr = [];
  while(arrCopy.length !== 0) {


    console.log(sortedArr.join(","))
    let poppedElement = arrCopy.pop();
    let insertIndex = sortedArr.length;
    while(insertIndex > 0 && sortedArr[insertIndex -1] > poppedElement) {
      sortedArr[insertIndex] = sortedArr[insertIndex -1];
      insertIndex--;
    }
    sortedArr[insertIndex] = poppedElement;
  }
  return sortedArr;
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  // Your code here
  for (let i = 1; i < arr.length; i++) {
    console.log(arr.join(','));
    let j = i - 1
    let tmp = arr[i]
    while (j >= 0 && arr[j] > tmp) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j+1] = tmp
  }
  return arr
}

module.exports = [insertionSort, insertionSortInPlace];