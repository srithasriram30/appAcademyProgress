

function selectionSort(arr) {

  // Copy the original array
  let arrCopy  = arr.slice()

  // Create an array to store the sorted values
  let sorted  = [];
  // While the array is not empty...
  while(arrCopy.length !== 0){
    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let min  = arrCopy[0];
    let minInd = 0;
    for(let i = 1; i < arrCopy.length ; i++) {
      if(min > arrCopy[i]){
        min = arrCopy[i];
        minInd = i;
      }
    }
     // Save and remove the value at the min index
    const valueAtMinInd = arrCopy.splice(minInd,1)[0]
    // Add the min value to the end of the sorted array
    sorted.push(valueAtMinInd);
  }
  return sorted;

}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let pointer = 0;
  // Repeat while the unsorted half is not empty:
    while(arr[pointer]) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
      let min = arr[pointer];
      let index = pointer;
      for(let i = pointer; i<arr.length; i++){
        if(arr[i] < min){
          min = arr[i];
          index = i;
        }
      }
    // Save the min value
      const minVal = arr.splice(index, 1)[0];

    // Shift every unsorted value to the left of the min value to the right by 1
      
    // Put the min value at the divider
    arr.splice(pointer, 0, minVal);
    // Increment the divider and repeat
    pointer++;
    }

    return arr;
}



module.exports = [selectionSort, selectionSortInPlace];
