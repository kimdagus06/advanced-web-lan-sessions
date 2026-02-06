/* Assignment 1: Convert a Regular Function to Arrow Function
Objective: Practice using arrow function syntax.
Task:
Convert the following function to an arrow function. Test the arrow function by adding  5  and  3 :
function add(a, b) {
return a + b;
}
*/

function add(a, b) {
  return a + b;
}

const addArrow = (a, b) => a + b;
const result = addArrow(5, 3);
console.log(result); // Output: 8

/* Assignment 2: Single Parameter Arrow Function
Objective: Understand how to use arrow functions with one parameter.
Task: Write an arrow function that takes a name as input and returns  "Hello, <name>" . Assign the
arrow function to the variable  greet  and call that variable with the parameter value  "Alice" 
*/

const greet = (name) => `Hello, ${name}`;

const greeting = greet("Alice");
console.log(greeting); // Output: Hello, Alice

/* Assignment 3: Basic Callback Function
Objective: Understand how to pass and use a callback function.
Task:
1. Write a function  process  that takes a number and a callback function.
2. The callback function should multiply the number by  2 .
3. Test the function with  process(5, callback) .
*/

function process(number, callback) {
  return callback(number);
}

const multiplyByTwo = (num) => num * 2;

const processedResult = process(5, multiplyByTwo);
console.log(processedResult); // Output: 10

/* Assignment 4: Arrow Function in  map 
Objective: Use arrow functions inside functions like  map .
Task:
1. Create an array  [1, 2, 3, 4] .
2. Use  map  with an arrow function to create a new array where each number is multiplied by 2. 
*/

const numbers = [1, 2, 3, 4];

const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8]

/* Assignment 5: Pass an Anonymous Function to  filter 
Objective: Use an anonymous function inside  filter .
Task:
1. Create an array  [5, 10, 15, 20, 30, 30, 45, 1, 3, 20, 50] .
2. Use  filter  with an anonymous function to keep only numbers greater than  10 .
*/

const numArray = [5, 10, 15, 20, 30, 30, 45, 1, 3, 20, 50];

const filteredNumbers = numArray.filter(function (num) {
  return num > 10;
});
console.log(filteredNumbers); // Output: [15, 20, 30, 30, 45, 20, 50]

/* Assignment 6: Extract User Names
Objective: Learn how to extract specific properties from objects using  map .
Task:
1. Create an array of user objects:
const users = [
{ id: 1, name: 'Alice' },
{ id: 2, name: 'Bob' },
{ id: 3, name: 'Charlie' }
];
2. Use  map  to create a new array of user names.
3. Log the result to the console.
*/

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const userNames = users.map((user) => user.name);
console.log(userNames); // Output: ['Alice', 'Bob', 'Charlie']

/* Assignment 7: Count Occurrences
Objective: Use  reduce  to count occurrences of items in an array.
Task:
1. Create an array of strings:  ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'] .
2. Use  reduce  to count the occurrences of each string.
3. Log the result as an object:  { apple: 3, banana: 2, cherry: 1 } .
*/

const fruits = ["apple", "banana", "apple", "cherry", "banana", "apple"];

const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(fruitCount); // Output: { apple: 3, banana: 2, cherry: 1 }

/* Assignment 8: Sum of Numbers
Objective: Learn how to use  reduce  to aggregate values in an array.
Task:
1. Create an array of numbers:  [10, 20, 30, 40] .
2. Use  reduce  to calculate the sum of all numbers in the array.
3. Log the result to the console. 
*/

const numList = [10, 20, 30, 40];
const sum = numList.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 100
