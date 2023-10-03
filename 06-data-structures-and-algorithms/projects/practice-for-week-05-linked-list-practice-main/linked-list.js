class LinkedListNode {
  constructor(val, next) {
    this.value = val;
    this.next = null;
    
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    const newNode = new LinkedListNode(val, null);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

  }

  addToTail(val) {

    let newNode = new LinkedListNode(val, null);
    let currentNode;
    if(this.head === null){
      this.head = newNode;
    } else {
      currentNode = this.head;
      while(currentNode.next){
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }

    this.length++;

  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;