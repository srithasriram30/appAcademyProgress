
function bubbleSort(arr) {

    // Iterate through the array
    let swapped;

    do{
      swapped = false;
  
      for(let i=0; i<arr.length;i++){
        
        if(arr[i] >arr[i+1]){
          let temp = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = temp;
          console.log(arr.join(","));
          swapped = true;
        }
        
      }

     } while(swapped)

      
      // If the current value is greater than its neighbor to the right
        // Swap those values

        // Do not move this console.log
        

    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning
 
return arr;
      

}

module.exports = bubbleSort;