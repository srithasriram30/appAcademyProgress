# Array practice

Identify the time complexity of each of these functions with a 1 sentence
justification for your answer. Assume `arr` is an array of length _n_.

## `arr.push()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Adding n elements will take n units of time; array needs n units of space

[push on MDN][push]


## `arr.pop()`

Time complexity: O(1)
Space complexity: O(n)
Justification: Pop returns the last element, so it will take the same amount of time no matter the size of the array; n units of space for array of size n

[pop on MDN][pop]

## `arr.shift()`

Time complexity: O(1)
Space complexity: O(n)
Justification: shift returns first element, so will be same no matter array size, array of size n needs n space

[shift on MDN][shift]

## `arr.unshift()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Adding n elements will take n time (also need to reindex all other elements), and n space for array of size n

[unshift on MDN][unshift]

## `arr.splice()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Array needs n space; adding&removing n items will take n time

[splice on MDN][splice]

## `arr.slice()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Array of n needs n space; also another n of space for the returned items; time to get n items will take n time;

[slice on MDN][slice]

## `arr.indexOf()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Array of n needs n space; element may be in last index of array (or not in array at all), so n time

[indexOf on MDN][indexOf]

## `arr.map()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Fn needs to go through all eleemnts; so n time; and n space to store array

[map on MDN][map]

## `arr.filter()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Fn needs to go through all eleemnts; so n time; and n space to store array

[filter on MDN][filter]

## `arr.reduce()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Fn needs to go through all eleemnts; so n time; and n space to store array

[reduce on MDN][reduce]

## `arr.reverse()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Fn is modifying in place, so takes n time, also n space for array of size n

[reverse on MDN][reverse]

## `[...arr]`

Time complexity: O(n)
Space complexity: O(n)
Justification:

[spread on MDN][spread]

[push]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
[pop]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
[shift]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
[unshift]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
[splice]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
[slice]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
[indexOf]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
[map]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[filter]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[reduce]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
[reverse]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
[spread]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
