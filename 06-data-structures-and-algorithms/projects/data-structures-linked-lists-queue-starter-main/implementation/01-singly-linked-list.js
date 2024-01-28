// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) { 
        // Add node of val to head of linked list
        const newNode = new SinglyLinkedNode(val);
        newNode.next = this.head;
        this.head = newNode;
        if(this.tail === null){
          this.tail = this.head;
        }
        this.length++;
        
        return this;
    }

    addToTail(val) {
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
  
        return this;
        // Normally this should be an operation of O(n), as we need to traverse the list to find the last node and append another node to it if this.tail 
        // was not defined. 

    }

    removeFromHead() {
        // Remove node at head
        let node;
        if(this.length === 0){
            return undefined;
        } else if(this.length === 1){
            node = this.head;
            this.head = null;
            
        } else {
            node = this.head;
            this.head = node.next;
            
        }
        this.length--;

        return node;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        let node;
        if(this.length === 0){
            return undefined;
        } else if(this.length === 1){
            node = this.tail;
            this.tail = null;
            this.head = null;
            this.length--
            return node;
        } else {
            let final = this.tail;
            let newFinal;
            let node = this.head;

            while(node.next !== null){
                let nextNode = node.next;
                if(nextNode === this.tail){
                    newFinal = node;
                    break;
                }

                node = node.next;
            }

            this.tail = newFinal;
            newFinal.next = null;
            this.length--;

            return final;
            
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

    print() {
        // Print out the linked list

        if(this.length > 0){
            let node = this.head;
            let i= 0;
            while(i<this.length){
                console.log(node.value);
                let next = node.next;
                node = next;
                i++;
            }
        }
    

        
        // Write your hypothesis on the time complexity of this method here
        // complexity should be n; as it takes n time to print n nodes in list
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
