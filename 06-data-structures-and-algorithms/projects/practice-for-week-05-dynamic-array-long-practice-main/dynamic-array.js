class DynamicArray {

  constructor(defaultSize = 4) {

    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;
  }

  read(index) {

    return this.data[index];
  }

  push(val) {

    // Your code here
    if (this.length === this.capacity) {
      this.resize();
    }
    this.data[this.length] = val;
    this.length++;
  }


  pop() {

    // Your code here
    if(this.length<1)
      return undefined;
    this.length--;
    return this.data[this.length];
    
  }

  shift() {

    // Your code here
    if(this.length <1)
      return undefined
    const returnVal = this.data[0];
    for (let i = 1; i <= this.length - 1; i++) {
      this.data[i - 1] = this.data[i];
    }
    this.data[this.length] = undefined;
    this.length--;

    return returnVal;
  }

  unshift(val) {

    // Your code here

    if (this.length === this.capacity) {
      this.resize();
    }

    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[0] = val;
    this.length++;
  
  }

  indexOf(val) {

    // Your code here
    for(let i = 0; i<this.data.length;i++){
      if(this.data[i] === val){
        return i;
      }
    }

    return -1;

  }

  resize() {

    // Your code here
    this.capacity *=2;
    const biggerArray = new Array(this.capacity);

    for(let i=0; i<this.data.length; i++){
      biggerArray[i] = this.data[i];
    }

    this.data = biggerArray;

  }

}


module.exports = DynamicArray;