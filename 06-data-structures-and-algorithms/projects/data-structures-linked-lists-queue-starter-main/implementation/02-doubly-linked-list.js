// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            let node = this.head;
            node.prev = newNode;
            this.head = newNode
            newNode.next = node;
          //  newNode.prev = null;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        let newNode = new DoublyLinkedNode(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            let node = this.tail;
            node.next = newNode;
            this.tail = newNode;
            newNode.prev = node;

        }
        this.length++;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head
        if(this.length === 0){
            return undefined;
        } else if(this.length === 1){
            let removedNode = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return removedNode.value;
        } else {
            let removedNode = this.head;
            let newHead = removedNode.next;
            this.head = newHead;
            newHead.prev = null;
            this.length--;
            return removedNode.value;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if(this.length === 0){
            return undefined;
        } else if(this.length === 1){
            let removedNode = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return removedNode.value;
        } else {
            let removedNode = this.tail;
            let newTail = removedNode.prev;
            this.tail = newTail;
            newTail.next = null;
            this.length--;
            return removedNode.value;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if(this.length === 0){
            return undefined;
        } else {
            return this.head.value;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node
        if(this.length === 0){
            return undefined;
        } else {
            return this.tail.value;
        }
        
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
