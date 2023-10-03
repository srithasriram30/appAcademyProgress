# Code Performance

## Time and Space Complexity

### Intro to Computer Science

- measure speed using timing benchmarks
- big-O analysis => time & space efficiency

### Timing Benchmarks

- `ctrl + c` => halt code execution
- timing code:
    - `console.time()` => built-in fn, measures how long an operation takes
    - Sample code:
    `console.time("addNums");
    addNums(1000000);
    console.timeEnd("addNums");`
    - `Date.now()` => milliseconds after 1 Jan 1970
    -Sample code:
    startTime = Date.now();
    addNums(1000000);
    endTime = Date.now();
    console.log(`Runtime: ${endTime - startTime}ms`);

### Intro to Big-O

- o stands for order => describes shape of growth curve
- Only concerned with very large values
- Only take highest power in an eqn
- Timing benchmarks not ideal, many factors affect performance; use complexity analysis


 ### Space Complexity

- Related to time complexity, also describes cpde performance w.r.t i/p size and expressed in big-O
- diff: describes how much memory fn requries

## Logic and Memory

### Logic and truth

- Computers are simple automata that run logical commands
- Computers run commands based on state (stored in memory)
- commands executed by processor (CPU)
- modern computers also have i/o => allow users to update state
- Basic Logic operators: AND, OR, NOT
- Multiple expersiion can be combined for compund logic

### Intro to Binary

- Binary: Base two, only 2 digits, 1 and 2
- 8 bits = 1 byte
- Base-16: Hexadecimal; digits 0-9; 10 - 15 represented by A - F
- prepended with 0x to indicate hex
- Most common letter implementation = ASCII
- Unicode includes > 100 000 characters; different langs and emoji

### Memory
- RAM: Random Access Memory; harware component
- stroes data for programs cuurently in use (including os and background processes)
- RAM is much faster than drive storage, also more expensive per bit

### Turing Machine

- modern computers are a form of turning machines
- can compute anything a modern computer can
- code always gets translated into machine instructions before execution
- memory: long strip of cells; cells can be 1 or 0
- cells divided into chunks called words (default size of processor)
- word is indexed by memory address (aka memory pointer or memory reference)
-in modern computer, moving from one cell to another takes no time at all

# Data Structures I

## Arrays and Stacks

### Intro to Arrays

- array: seq of elements of same type stored in contiguous block of memory
- most space efficeient, also fastest method via indexing

### Dynamic Arrays

- resize array: os requests new size bytes of memory, copies old values, writes new value into last slot and frees old memory
- can overallocate mem to trade space for speed

### Stacks

- abstract data type, no specific implementation req
- uses LIFO
- push and pop to add and remove elements
- implemented w/ array data structure

code:
class Stack {
    constructor() {
        this.data = [];
    }

    push(value) {
        this.data.push(value);
    }

    pop() {
        return this.data.pop();
    }

    size() {
        return this.data.length;
    }
}

- performance depends on implementation

# Data Structures I

## Linked Lists and Queues

### Linked Lists

- linked list: ordered seq of nodes; each node consists of a data val and a pointer to the next node

code:
class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

- linked list itself is a pointer to the first node (called head node)
- list continues until it reaches a null node
- if head pointer is null => list is empty

- creation of nodes should be abstrcted away by linked list data structure

- time complexity of adding to head node: O(n)

- nodes not required to be in contiguous blocks

- traversing linked list: O(n)

### Linked Lists Optimization

- requires n nodes to store n values: space complexity O(n)
- addToHead: O(1)
- traversel: O(n)
- addToTail: O(N)
- addToTail can be improved with a tail pointer; O(1) time complexity; but code is slightly more complicated
- removeFromHead => point head to second node
- remove from tail: no way to find previous node; but can check if a node is the second last one in list (`node.next.next === null`) => O(n) operation
- Optimise: Doubly linked list; add a previous pointer to `LinkesListNode`; removeFromTail is O(1)
- DoublyLinkedList has mem cost and code complexity