const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    // Your code here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets);
    this.data.fill(null);

  }

  hash(key) {
    
    let hashStr = sha256(key).slice(0, 8);

    return parseInt(hashStr, 16);
  }

  hashMod(key) {
    // Your code here
    return this.hash(key)%this.data.length;
  }

  insertNoCollisions(key, value) {
    // Your code here
    let index = this.hashMod(key)
    if(this.data[index] === null){
      this.data[index] = {key: key, value: value};
      this.count++;
    } else {
      throw new Error("hash collision or same key/value pair already exists!");
    }
    
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    let index = this.hashMod(key)
    let nextVal = this.data[index]
    if(nextVal === null){
      this.data[index] = {key: key, value: value};
      this.count++;
    } else {
      this.data[index] = {key: key, value:value, next: nextVal};
      this.count++;
    }
  }

  insert(key, value) {
    // Your code here
    let index = this.hashMod(key);
    let inserted = this.data[index]
    let nextVal = this.data[index];
    let isPresent = false;
    if(nextVal === null){
      this.data[index] = {key: key, value: value};
      this.count++;
    } else {
      while(nextVal){
        if(nextVal.key === key){
          isPresent = true;
          break;
        }
        nextVal = nextVal.next;
      }
      console.log(isPresent)
      if(!isPresent){
        this.data[index] = {key: key, value:value, next: inserted};
        this.count++;
      } else {
        nextVal.value = value;
      }
      
    }
  }

}


module.exports = HashTable;