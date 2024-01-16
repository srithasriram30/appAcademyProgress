// // Your code here
// function Array(array1){
//     this.array1 = array1;
// }

Array.prototype.isEqual = function(array) {
    let arr1 = this;
    for(let i=0; i<array.length;i++){
        
        if(arr1[i] !== array[i]){
            return false;
        }

    }

    return true;
}

module.exports = Array;