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
