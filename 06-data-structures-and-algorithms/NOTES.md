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

## Time Complexity

### Caching

- Most commona nd impactful methods to increase code performance
- For slow, frequenty used calculation: calculate once & store result
- Pure fn => result depends only on i/p; can be cached with i/p as key
- For pure fn that can also be defined recursively => dynamic cache can be used to calculate any sub-problem in constant time
- Creating a running log of past calculations in recursive fn => memonization
- Building cache from bottom up => tabulation
- Memonisation & tabulation => forms of dynamic programming

### Memonization of Fibonacci

- Memonization => design pattern used to reduce overall no of calculations that can occur in algorithms that use recursive strategies to solve
- Two features:
    - Fn is recursive
    - additional data structure used is typically an object
- Trade-off between time and memory used
- Memonization is useful when attacking recursive problems that have many overlapping sub-problems

### Tabulation of Fibonacci

- Two main features:
    - function is iterative
    - additional data structure used is typically an array

# Data Structures II

## Hash Tables and Sets

### Hash Functions

- A hash fn maps aribitary data to a deterministic, fixed-sized output.
- Will always return the same o/p for a given i/p
- SHA algorithm is normally used

### Hash Tables

- Hash tables (sometimes known as hash maps) are arguably most important data structure
- Hash table is an array of elements indexed by a hash key. Key hash is then run through a modulo fn which converts it into an array index
- 1st step: initialize an array of fixed size for data storage
- Each slot is called 'bucket' and initialized to null
- Next, hash fn which converts keys to integers
`
function hash(str) {
  let hashValue = 0;

  for (let i = 0 ; i < str.length ; i++) {
    hashValue += str.charCodeAt(i);
  }

  return hashValue;
}
`
- Finally, a fn to convert key hash into a valid array index

`
function hashMod(key) {
  return hash(key) % data.length;
}
`

- To insert into a hash table, you can create a new class for KeyValue data

`class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}`

- To retrieve, use the hashMod method to get the key

- Hashing is technically O(n) where n is the size of the key; but if n is reasoably sized (< 1000) it is O(1)
- Searching is also O(1)

### Hash Table Collisions

- Hash collisons : if two hash values are the same, but have different keys => newer one will overwrite the old one
- Probablility of hash collisons can be reduced ( prob is 1/buckets.length), but can not be eleminated
- One solution: allow multiple key/value pairs to reside in same bucket => add next pointer to eaxh keyValuePair and treat it as nodes in linked list
- Performance is O(n) where n is no of collisons
O(n) is worst case, but average is O(1)
- Can also increase array size

### Sets

- set: abstract data type used to store unique, unordered values
- three important properties:
  - no duplicate elements
  - elements are unordered
  - can check if element is contained in O(1) time

- usually implemented using hash tables

# Sorting

## Basic Sorting

### Intro to Sorting

- can swap two variables using tmp, or destructuring (`[arr[4],arr[6] = [arr[6],arr[4]]`)

### Bubble Sort

- simple sorting alorithm
- Steps:

    1) Iterate through the array
    2) If the current value is greater than its neighbor to the right, swap those values
    3) If you get to the end of the array and no swaps have occurred, return
    4) Otherwise, repeat from the beginning

### Insertion Sort

- pick elements from right side and move to left one-by-one, inserting into correct position

- Steps:


    1) Divide the array into sorted and unsorted
    2) Pick and remove a value from the unsorted
    3) Insert it into the correct place in the sorted
    4) Repeat this until unsorted is empty and sorted is full
### Selection Sort

- Steps:
 
    1) Divide the array into sorted and unsorted
    2) Find and remove the smallest value from the unsorted
    3) Add this value to the end of the sorted array
    4) Repeat this until unsorted is empty and sorted is full

### Recursive sorting

- Three traits;
  - Fn calls itself recurrsively
  - base case where recursion ends
  - state moves towards base case w/ each call 

- Time complexity: O(n^2)
- Space complexity: O(n)

## Intermediate sorting

### Merge Sort

- Uses divide & conquer approach
  1) Split unsorted array in half
  2) sort halves
  3) merge newly sorted halves

- Time complexity: O(n log n) 
- Space complexity: In place => O(1)

### Quicksort 


   1) Pick a value in the array to serve as the pivot
   2) Partition the array so that values smaller than the pivot are on the left and values larger than the pivot are on the right
   3) Sort the left and the right partitions
   4) Return an array with left, pivot, and right values

- Also calls itself recursively
- Time complexity: O(n log n)
- Space complexity: O(n log n), o(1) for in-place

# Trees and Binary Search

## Trees Basic

### Logarithms

- Inverse of exponent; binary log is a base-2 log

### Binary Search

- Uses divide and conquer
- Preconditions: 
  1) Data must be sorted
  2) Data can be accessed by index in constant time
- Time complexity: O(log n)

## Binary Search Trees

# Graphs