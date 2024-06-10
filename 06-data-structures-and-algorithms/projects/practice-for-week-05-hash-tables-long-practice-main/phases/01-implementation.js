class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    // Your code here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets);
    this.data.fill(null);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
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
          nextVal.value = value;
          break;
        }
        nextVal = nextVal.next;
      }
      if(!isPresent){
        this.data[index] = {key: key, value:value, next: inserted};
        this.count++;
      }
      
    }
  }


  read(key) {
    // Your code here
    let index = this.hashMod(key);
    let nextVal = this.data[index];
    while(nextVal){
      if(nextVal.key === key){
        return nextVal.value;
      }
      nextVal = nextVal.next;
    }
    return undefined;

  }


  resize() {
    // Your code here
    const resizedData = new Array(this.capacity * 2).fill(null)
    this.capacity *= 2
    this.data.forEach(element => {
      while (element){
        const pair = new KeyValuePair(element.key, element.value)
        const index = this.hashMod(element.key)
        pair.next = resizedData[index]
        resizedData[index] = pair

        element = element.next
      }
    })

    this.data = resizedData
    
  }


  delete(key) {
    // Your code here
    let index = this.hashMod(key)
    if (this.data[index]) {
      let element = this.data[index]
      let previousNode = null
      if (element.key === key) {
        this.data[index] = element.next
        this.count--
      } else {
        while (element.next) {
          previousNode = element
          element = element.next
          if (element.key === key) {
            previousNode.next = element.next
            this.count--
            break
          }
        }
        return 'Key not found'
      }
    } else {
      return 'Key not found'
    }
  }
}


module.exports = HashTable;