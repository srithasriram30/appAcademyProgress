class DynamicArray {

  constructor(defaultSize=4) {

    // Your code here
    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;

  }

  read(index) {

    // Your code here
    return this.data[index];
  }

  unshift(val) {

    // Your code here
    if(this.length===this.capacity){
      this.capacity *=2;
      const biggerArray = new Array(this.capacity);
      biggerArray[0] = val;
      for(let i=0; i<this.data.length;i++){
        biggerArray[i+1] = this.data[i];
      }
      this.data = biggerArray;
    } else{
      for(let i = this.length; i>0; i--){
        this.data[i] = this.data[i-1];
      }
      this.data[0] = val;
    }
    this.length++;
  }

}


module.exports = DynamicArray;
