const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        let newNode = new SinglyLinkedNode(val);

        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            let previousNode = this.tail;
            previousNode.next = newNode;
            this.tail = newNode;
        }
  
        this.length++; 

        return this.length;
        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)

        let node;
        if(this.length === 0){
            return null;
        } else if(this.length === 1){
            node = this.head;
            this.head = null;
            this.tail = null;
            
        } else {
            node = this.head;
            this.head = node.next;
            
        }
        this.length--;

        return node.value;
        
        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
